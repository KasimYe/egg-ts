import { Context } from 'egg';
import { StatusError } from '../entity/status_error';
// 参数校验规则
interface IRules {
  [key: string]: {
    type: string;
    field?: string;
    max?: number;
    min?: number;
    required?: boolean;
    [key: string]: any;
  };
}
export default {
  /**
   * @description 检验请求参数
   * @param {object} rules 校验规则
   * @param {object} params 被校验参数
   * @param {Context} ctx Context
   * @throws {StatusError} 如果校验不通过则throw一个error
   */
  validateParams(rules: IRules, params: any, ctx: Context) {
    try {
      ctx.validate(rules, params);
      return params;
    } catch (e) {
      ctx.logger.info(e.message);
      throw new StatusError(
        e.message,
        StatusError.ERROR_STATUS.REQUEST_PARAMS_ERROR,
      );
    }
  },
};
