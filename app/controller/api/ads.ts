import { Context } from 'egg';
import BaseController from './base';

export default class AdController extends BaseController {
  constructor(app: Context) {
    super('ads', app);
  }
}
