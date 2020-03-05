// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAd from '../../../app/model/ad';
import ExportBrand from '../../../app/model/brand';
import ExportCategory from '../../../app/model/category';
import ExportChannel from '../../../app/model/channel';
import ExportGood from '../../../app/model/good';
import ExportTopic from '../../../app/model/topic';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Ad: ReturnType<typeof ExportAd>;
    Brand: ReturnType<typeof ExportBrand>;
    Category: ReturnType<typeof ExportCategory>;
    Channel: ReturnType<typeof ExportChannel>;
    Good: ReturnType<typeof ExportGood>;
    Topic: ReturnType<typeof ExportTopic>;
    User: ReturnType<typeof ExportUser>;
  }
}
