import { Application } from 'egg';

export default (app: Application) => {  
  const controller=app.controller;
  const router=app.router;

  router.get('/', controller.home.index);
  router.get('/api/index/index', controller.api.index.index);  
  router.post('/api/auth/loginByWeixin',controller.api.auth.loginByWeChat);
  router.resources('api_users', '/api/users', controller.api.users);
  router.resources('api_ads', '/api/ads', controller.api.ads);
  router.resources('api_channels', '/api/channels', controller.api.channels);
  router.resources('api_goods', '/api/goods', controller.api.goods);
  router.resources('api_brands', '/api/brands', controller.api.brands);
  router.resources('api_topics', '/api/topics', controller.api.topics);
  router.resources(
    'api_categories',
    '/api/categories',
    controller.api.categories,
  );
};
