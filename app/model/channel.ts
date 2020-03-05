import { Application } from 'egg';
import { DataTypes } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const channel = sequelize.define(
    'channel',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING(60),
      url: DataTypes.STRING(255),
      icon_url: DataTypes.STRING(255),
      sort_order: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: app.config.tablePrefix + 'channel',
    },
  );
  return channel;
};
