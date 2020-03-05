import { Application } from 'egg';
import { DataTypes } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const good = sequelize.define(
    'good',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      category_id: DataTypes.INTEGER,
      goods_sn: DataTypes.STRING(60),
      name: DataTypes.STRING(120),
      brand_id: DataTypes.INTEGER,
      goods_number: DataTypes.INTEGER,
      keywords: DataTypes.STRING(255),
      goods_brief: DataTypes.STRING(255),
      goods_desc: DataTypes.TEXT,
      is_on_sale: DataTypes.TINYINT,
      add_time: DataTypes.INTEGER,
      sort_order: DataTypes.INTEGER,
      is_delete: DataTypes.TINYINT,
      attribute_category: DataTypes.INTEGER,
      counter_price: DataTypes.DECIMAL(10, 2),
      extra_price: DataTypes.DECIMAL(10, 2),
      is_new: DataTypes.TINYINT,
      goods_unit: DataTypes.STRING(45),
      primary_pic_url: DataTypes.STRING(255),
      list_pic_url: DataTypes.STRING(255),
      retail_price: DataTypes.DECIMAL(10, 2),
      sell_volume: DataTypes.INTEGER,
      primary_product_id: DataTypes.INTEGER,
      unit_price: DataTypes.DECIMAL(10, 2),
      promotion_desc: DataTypes.STRING(255),
    },
    {
      timestamps: false,
    },
  );
  return good;
};
