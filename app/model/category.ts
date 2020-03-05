import { Application } from 'egg';
import { DataTypes } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;

  const category = sequelize.define(
    'category',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING(90),
      keywords: DataTypes.STRING(255),
      front_desc: DataTypes.STRING(255),
      parent_id: DataTypes.INTEGER,
      sort_order: DataTypes.BOOLEAN,
      show_index: DataTypes.BOOLEAN,
      is_show: DataTypes.BOOLEAN,
      banner_url: DataTypes.STRING(255),
      icon_url: DataTypes.STRING(255),
      img_url: DataTypes.STRING(255),
      wap_banner_url: DataTypes.STRING(255),
      level: DataTypes.STRING(255),
      type: DataTypes.INTEGER,
      front_name: DataTypes.STRING(255),
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: app.config.tablePrefix + 'category',
    },
  );
  return category;
};
