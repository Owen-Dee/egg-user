'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async findAll() {
        this.ctx.body = await this.ctx.service.user.findAll();
    }

    async findById() {
        const id = this.ctx.params.id;
        const user = await this.ctx.service.user.findById(id);
        await this.ctx.render('detail.pug', {
            user
        });
    }

    async update() {
        const id = this.ctx.params.id;
        const body = this.ctx.request.body;
        this.ctx.body = await this.ctx.service.user.update(id, body);
    }
}

module.exports = UserController;