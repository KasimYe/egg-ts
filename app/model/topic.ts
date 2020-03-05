import { Application } from 'egg';
import { DataTypes } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;

  const topic = sequelize.define(
    'topic',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING(255),
      content: DataTypes.TEXT,
      avatar: DataTypes.STRING(255),
      item_pic_url: DataTypes.STRING(255),
      subtitle: DataTypes.STRING(255),
      topic_category_id: DataTypes.INTEGER,
      price_info: DataTypes.DECIMAL(10, 2),
      read_count: DataTypes.STRING(255),
      scene_pic_url: DataTypes.STRING(255),
      topic_template_id: DataTypes.INTEGER,
      topic_tag_id: DataTypes.INTEGER,
      sort_order: DataTypes.INTEGER,
      is_show: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: app.config.tablePrefix + 'topic',
    },
  );
  return topic;
};
