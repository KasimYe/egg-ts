import {  Context } from 'egg';
import BaseController from './base';
export default class UserController extends BaseController {
  constructor(app: Context) {
    super('users', app);
  }
}
