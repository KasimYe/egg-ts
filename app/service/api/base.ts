import { Service, Context } from 'egg';

export default class BaseService extends Service {
  private model: string;
  /**
   * 构造函数
   * @param model 模型名称
   * @param app Context上下文
   */
  constructor(model: string, app: Context) {
    super(app);
    this.model = model;
  }

  async list(query: object, page: number, per = 10) {
    const result = await this.app.model[this.model].findAll({
      where: query,
      limit: per,
      offset: (page - 1) * per,
    });
    return result;
  }

  async one(id: number) {
    const result = await this.app.model[this.model].findOne({ where: { id: id } });
    return result;
  }

  async update(id: number, data: object) {
    return await this.app.model[this.model].update(data, { where: { id: id } });
  }

  async save(data: object) {
    return await this.app.model[this.model].create(data);
  }

  //   async saveMany(models: any[]) {}

  async deleteOne(id: number) {
    return await this.app.model[this.model].destroy({ where: { id: id } });
  }

  //   async deleteMany(ids: number[]) {}
  
}
