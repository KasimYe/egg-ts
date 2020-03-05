import { Controller, Context } from 'egg';

export default class BaseController extends Controller {
  private serviceName: string;
  /**
   * 构造函数
   * @param serviceName 服务名称
   * @param app 上下文Context
   */
  constructor(serviceName: string, app: Context) {
    super(app);
    this.serviceName = serviceName;
  }
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.api[this.serviceName].list({}, 1, 10);
  }

  async show() {
    const { ctx } = this;
    ctx.body = await ctx.service.api[this.serviceName].one(ctx.params.id);
  }

  async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.api[this.serviceName].save(ctx.request.body);
  }

  async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.api[this.serviceName].update(
      ctx.params.id,
      ctx.request.body,
    );
  }

  async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.api[this.serviceName].deleteOne(ctx.params.id);
  }
}
