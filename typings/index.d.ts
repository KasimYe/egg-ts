import 'egg';

declare module 'egg' {
    interface Application {
      model: Sequelize;
      validator: any;
      role: IUserrole;
    }
  
    interface Context {
      // model: IModel;
      model: Sequelize;
      validate: (rules: Object, body: Object) => Promise<any>;
      jwtSession: IJwtSession;
    }
  }