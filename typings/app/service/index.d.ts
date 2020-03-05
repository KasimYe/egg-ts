// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportApiAds from '../../../app/service/api/ads';
import ExportApiBase from '../../../app/service/api/base';
import ExportApiChannels from '../../../app/service/api/channels';
import ExportApiGoods from '../../../app/service/api/goods';
import ExportApiUsers from '../../../app/service/api/users';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    api: {
      ads: ExportApiAds;
      base: ExportApiBase;
      channels: ExportApiChannels;
      goods: ExportApiGoods;
      users: ExportApiUsers;
    }
  }
}
