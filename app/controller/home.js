'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const users = await this.ctx.service.home.getAllUsers();
    await this.ctx.render('home.pug', {
      users
    });
  }
}

module.exports = HomeController;