import {Service} from 'egg'

export default class UsersService extends Service{
    async list(){
        const result=await this.app.model.User.findAll();
        return result;
    }
}