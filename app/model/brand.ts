import { Application } from 'egg';
import { DataTypes } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;

  const brand = sequelize.define(
    'brand',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING(255),
      list_pic_url: DataTypes.STRING(255),
      simple_desc: DataTypes.STRING(255),
      pic_url: DataTypes.STRING(255),
      sort_order: DataTypes.TINYINT,
      is_show: DataTypes.BOOLEAN,
      floor_price: DataTypes.DECIMAL(10, 2),
      app_list_pic_url: DataTypes.STRING(255),
      is_new: DataTypes.BOOLEAN,
      new_pic_url: DataTypes.STRING(255),
      new_sort_order: DataTypes.TINYINT,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: app.config.tablePrefix + 'brand',
    },
  );
  return brand;
};
