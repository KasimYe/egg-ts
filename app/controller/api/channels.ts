import { Context } from 'egg';
import BaseController from './base';

export default class ChannelController extends BaseController {
  constructor(app: Context) {
    super('channels', app);
  }
}
