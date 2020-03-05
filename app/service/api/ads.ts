import BaseService from './base';
import { Context } from 'egg';

export default class AdsService extends BaseService {
  constructor(app: Context) {
    super('Ad', app);
  }
}
