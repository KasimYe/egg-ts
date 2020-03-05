import BaseService from './base';
import { Context } from 'egg';

export default class GoodsService extends BaseService {
  constructor(app: Context) {
    super('Good', app);
  }
}
