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

  /**
   * findAll List
   * @param where 查询条件
   * @param offset 页数
   * @param limit 每页条目数
   * @param order 排序，格式[['name', 'DESC']]
   * @param attributes 查询的列
   */
  async list(
    where: object = {},
    offset: number = 1,
    limit: number = 10,
    order: object = [],
    attributes: string[] = [],
  ) {
    const options = {
      where: where,
      limit: limit,
      offset: (offset - 1) * limit,
      order: order,
      attributes: attributes.length > 0 ? attributes : null,
    };
    return await this.app.model[this.model].findAll(options);
  }

  async one(id: number) {
    return await this.app.model[this.model].findOne({
      where: { id: id },
    });
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
