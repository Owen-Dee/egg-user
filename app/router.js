'use strict';

const userRouter = require('./routers/user');
const homeRouter = require('./routers/home');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  // user
  userRouter(app);
  // home
  homeRouter(app);
};