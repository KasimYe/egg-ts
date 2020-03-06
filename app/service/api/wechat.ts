import { Service } from 'egg';
import * as crypto from 'crypto';

export default class WeChatService extends Service {
  async decryptUserInfoData(
    sessionKey: string,
    encryptedData: string,
    iv: string,
  ) {
    // base64 decode
    const _sessionKey = Buffer.from(sessionKey, 'base64');
    const _encryptedData = Buffer.from(encryptedData, 'base64');
    const _iv = Buffer.from(iv, 'base64');
    let decoded: any = '';
    try {
      // 解密
      const decipher = crypto.createDecipheriv('aes-128-cbc', _sessionKey, _iv);
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true);
      decoded = decipher.update(_encryptedData, 'binary', 'utf8');
      decoded += decipher.final('utf8');

      decoded = JSON.parse(decoded);
    } catch (err) {
      return '';
    }

    if (decoded.watermark.appid !== this.app.config.wechat.appid) {
      return '';
    }

    return decoded;
  }
}
