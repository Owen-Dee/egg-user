'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getAllUsers() {
        this.ctx.body = await this.ctx.service.user.findAll();
    }

    async getUserById() {
        const id = this.ctx.params.id;
        const user = await this.ctx.service.user.getUserById(id);
        await this.ctx.render('detail.pug', {
            user
        });
    }

    async showEditUserInfo() {
        const id = this.ctx.params.id;
        const user = await this.ctx.service.user.getUserById(id);
        await this.ctx.render('edit.pug', {
            user
        }); 
    }

    async updateUser() {
        const id = this.ctx.params.id;
        const body = this.ctx.request.body;
        const result = await this.ctx.service.user.updateUser(id, body);

        this.ctx.body = result;
    }
}

module.exports = UserController;