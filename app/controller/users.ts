import {Controller} from 'egg'

export default class UserController extends Controller{
    async index(){
        const {ctx}=this;
        ctx.body=await ctx.service.users.list();
    }
}