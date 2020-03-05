import { Context } from 'egg';
import BaseController from './base';

export default class BrandController extends BaseController {
  constructor(app: Context) {
    super('brands', app);
  }
}
