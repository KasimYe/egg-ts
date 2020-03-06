// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportApiAds from '../../../app/service/api/ads';
import ExportApiBase from '../../../app/service/api/base';
import ExportApiBrands from '../../../app/service/api/brands';
import ExportApiCategories from '../../../app/service/api/categories';
import ExportApiChannels from '../../../app/service/api/channels';
import ExportApiGoods from '../../../app/service/api/goods';
import ExportApiTopics from '../../../app/service/api/topics';
import ExportApiUsers from '../../../app/service/api/users';
import ExportApiWechat from '../../../app/service/api/wechat';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    api: {
      ads: ExportApiAds;
      base: ExportApiBase;
      brands: ExportApiBrands;
      categories: ExportApiCategories;
      channels: ExportApiChannels;
      goods: ExportApiGoods;
      topics: ExportApiTopics;
      users: ExportApiUsers;
      wechat: ExportApiWechat;
    }
  }
}
