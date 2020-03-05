import { Controller } from 'egg';
import { Op } from 'sequelize';

interface NewCategory {
  id: string;
  name: string;
  goodsList: object[];
}

export default class IndexController extends Controller {
  async index() {
    const { ctx } = this;
    const banner = await ctx.service.api.ads.list({ ad_position_id: 1 }, 1, 10);
    const channel = await ctx.service.api.channels.list({}, 1, 10, [
      ['sort_order', 'ASC'],
    ]);
    const newGoods = await ctx.service.api.goods.list(
      { is_on_sale: 1, is_new: 1 },
      1,
      4,
      [['sort_order', 'ASC']],
      ['id', 'name', 'list_pic_url', 'retail_price'],
    );
    const hotGoods = await ctx.service.api.goods.list(
      { is_on_sale: 1, is_hot: 1 },
      1,
      3,
      [['sort_order', 'ASC']],
      ['id', 'name', 'list_pic_url', 'retail_price', 'goods_brief'],
    );
    const brandList = await ctx.service.api.brands.list({ is_new: 1 }, 1, 4, [
      ['new_sort_order', 'ASC'],
    ]);
    const topicList = await ctx.service.api.topics.list({ is_show: 1 }, 1, 3);
    const categoryList = await ctx.service.api.categories.list({
      parent_id: 0,
      name: { [Op.not]: '推荐' },
    });

    const newCategoryList = new Array<NewCategory>();
    for (const categoryItem of categoryList) {
      const childCategoryIds = await ctx.service.api.categories.list(
        { parent_id: categoryItem.id },
        1,
        100,
        [],
        ['id'],
      );
      const categoryGoods = await ctx.service.api.goods.list(
        { is_on_sale: 1, category_id: { [Op.in]: childCategoryIds } },
        1,
        7,
        [],
        ['id', 'name', 'list_pic_url', 'retail_price'],
      );
      newCategoryList.push({
        id: categoryItem.id,
        name: categoryItem.name,
        goodsList: categoryGoods,
      });
    }

    ctx.body = {
      banner: banner,
      channel: channel,
      newGoodsList: newGoods,
      hotGoodsList: hotGoods,
      brandList: brandList,
      topicList: topicList,
      categoryList: newCategoryList,
    };
  }
}
