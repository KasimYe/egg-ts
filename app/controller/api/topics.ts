import { Context } from 'egg';
import BaseController from './base';

export default class TopicController extends BaseController {
  constructor(app: Context) {
    super('topics', app);
  }
}
