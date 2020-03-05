import { Context } from 'egg';
import BaseController from './base';

export default class GoodController extends BaseController {
  constructor(app: Context) {
    super('goods', app);
  }
}
