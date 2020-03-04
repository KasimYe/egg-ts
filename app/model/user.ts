import { Application } from 'egg';
import { DataTypes } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
    },
    age: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  });
  return user;
};
