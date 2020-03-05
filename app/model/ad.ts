import { Application } from 'egg';
import { DataTypes } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;

  const ad = sequelize.define(
    'ad',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      ad_position_id: DataTypes.INTEGER,
      media_type: DataTypes.INTEGER,
      name: DataTypes.STRING(60),
      link: DataTypes.STRING(255),
      image_url: DataTypes.TEXT,
      content: DataTypes.STRING(255),
      end_time: DataTypes.INTEGER,
      enabled: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: app.config.tablePrefix + 'ad',
    },
  );
  return ad;
};
