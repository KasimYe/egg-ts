import BaseService from './base';
import { Context } from 'egg';

export default class ChannelsService extends BaseService {
  constructor(app: Context) {
    super('Channel', app);
  }
}
