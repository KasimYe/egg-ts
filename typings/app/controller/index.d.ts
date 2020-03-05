// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiAds from '../../../app/controller/api/ads';
import ExportApiBase from '../../../app/controller/api/base';
import ExportApiChannels from '../../../app/controller/api/channels';
import ExportApiGoods from '../../../app/controller/api/goods';
import ExportApiUsers from '../../../app/controller/api/users';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      ads: ExportApiAds;
      base: ExportApiBase;
      channels: ExportApiChannels;
      goods: ExportApiGoods;
      users: ExportApiUsers;
    }
  }
}
