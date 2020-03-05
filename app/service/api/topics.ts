import BaseService from './base';
import { Context } from 'egg';

export default class TopicsService extends BaseService {
  constructor(app: Context) {
    super('Topic', app);
  }
}
