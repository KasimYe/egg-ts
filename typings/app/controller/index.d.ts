// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiAds from '../../../app/controller/api/ads';
import ExportApiAuth from '../../../app/controller/api/auth';
import ExportApiBase from '../../../app/controller/api/base';
import ExportApiBrands from '../../../app/controller/api/brands';
import ExportApiCategories from '../../../app/controller/api/categories';
import ExportApiChannels from '../../../app/controller/api/channels';
import ExportApiGoods from '../../../app/controller/api/goods';
import ExportApiIndex from '../../../app/controller/api/index';
import ExportApiTopics from '../../../app/controller/api/topics';
import ExportApiUsers from '../../../app/controller/api/users';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      ads: ExportApiAds;
      auth: ExportApiAuth;
      base: ExportApiBase;
      brands: ExportApiBrands;
      categories: ExportApiCategories;
      channels: ExportApiChannels;
      goods: ExportApiGoods;
      index: ExportApiIndex;
      topics: ExportApiTopics;
      users: ExportApiUsers;
    }
  }
}
