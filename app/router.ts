import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.resources('api_users', '/api/users', controller.api.users);
  router.resources('api_ads', '/api/ads', controller.api.ads);
  router.resources('api_channels', '/api/channels', controller.api.channels);
  router.resources('api_goods', '/api/goods', controller.api.goods);
};
