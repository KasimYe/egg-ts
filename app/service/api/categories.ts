import BaseService from './base';
import { Context } from 'egg';

export default class CategoriesService extends BaseService {
  constructor(app: Context) {
    super('Category', app);
  }
}
