import BaseService from './base';
import { Context } from 'egg';

export default class BrandsService extends BaseService {
  constructor(app: Context) {
    super('Brand', app);
  }
}
