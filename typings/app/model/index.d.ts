// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAd from '../../../app/model/ad';
import ExportChannel from '../../../app/model/channel';
import ExportGood from '../../../app/model/good';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Ad: ReturnType<typeof ExportAd>;
    Channel: ReturnType<typeof ExportChannel>;
    Good: ReturnType<typeof ExportGood>;
    User: ReturnType<typeof ExportUser>;
  }
}
