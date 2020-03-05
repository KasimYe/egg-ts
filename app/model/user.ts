import { Application } from 'egg';
import { DataTypes } from 'sequelize';

export default (app: Application) => {
  const sequelize = app.model;
  const user = sequelize.define(
    'user',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      username: DataTypes.STRING(60),
      password: DataTypes.STRING(32),
      gender: DataTypes.INTEGER,
      birthday: DataTypes.INTEGER,
      register_time: DataTypes.INTEGER,
      last_login_time: DataTypes.INTEGER,
      last_login_ip: DataTypes.STRING(15),
      user_level_id: DataTypes.INTEGER,
      nickname: DataTypes.STRING(60),
      mobile: DataTypes.STRING(20),
      register_ip: DataTypes.STRING(45),
      avatar: DataTypes.STRING(255),
      weixin_openid: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      timestamps: false,
    },
  );
  return user;
};
