import { Controller } from 'egg';
import { StatusError } from '../../entity/status_error';
import * as crypto from 'crypto';
import * as uuid from 'uuid';
import * as JWT from 'jsonwebtoken';

export default class AuthController extends Controller {
  async loginByWeChat() {
    const {
      helper,
      request,
      response,
      logger,
      app: { httpclient, config },
      service,
      model,
    } = this.ctx;
    const { code, userInfo: fullUserInfo } = helper.validateParams(
      {
        code: { type: 'string' },
        userInfo: { type: 'object' },
      },
      request.body,
      this.ctx,
    );
    const userInfo = fullUserInfo.userInfo;
    const clientIp = '';
    // logger.info('code:', code);
    // logger.info('userInfo:', userInfo);
    // 向微信服务器请求登录会话信息
    const sessionData = (await httpclient
      .request('https://api.weixin.qq.com/sns/jscode2session', {
        method: 'GET',
        data: {
          grant_type: 'authorization_code',
          js_code: code,
          secret: config.wechat.secret,
          appid: config.wechat.appid,
        },
        dataType: 'json',
      })
      .then(res => res.data)) as {
      session_key: string;
      openid: string;
      user_id?: number;
    };
    logger.info('sessionData:', sessionData);

    if (!sessionData || !sessionData.openid) {
      throw new StatusError(
        '登录失败session',
        StatusError.ERROR_STATUS.SERVER_ERROR,
      );
    }

    // 验证用户信息完整性
    const sha1 = crypto
      .createHash('sha1')
      .update(fullUserInfo.rawData + sessionData.session_key)
      .digest('hex');
    if (fullUserInfo.signature !== sha1) {
      throw new StatusError(
        '登录失败crypto',
        StatusError.ERROR_STATUS.SERVER_ERROR,
      );
    }

    // 根据openid查找用户是否已经注册
    let user = await model.User.findOne({
      where: { weixin_openid: sessionData.openid },
      attributes: [
        'id',
        'username',
        'nickname',
        'gender',
        'avatar',
        'birthday',
      ],
      raw: true,
    });
    if (!user) {
      // 注册
      user = await service.api.users.save({
        username: '微信用户' + uuid.v1(),
        password: sessionData.openid,
        register_time: Math.floor(new Date().getTime() / 1000),
        register_ip: clientIp,
        last_login_time: Math.floor(new Date().getTime() / 1000),
        last_login_ip: clientIp,
        mobile: '',
        weixin_openid: sessionData.openid,
        avatar: userInfo.avatarUrl || '',
        gender: userInfo.gender || 1, // 性别 0：未知、1：男、2：女
        nickname: userInfo.nickName,
      });
    }

    sessionData.user_id = user.id;

    // 更新登录信息
    service.api.users.update(user.id, {
      last_login_ip: clientIp,
      last_login_time: Math.floor(new Date().getTime() / 1000),
    });

    // 创建token
    const token = JWT.sign(sessionData, config.jwtSession.secret);

    response.body = {
      token,
      userInfo: user,
    };
  }
}
