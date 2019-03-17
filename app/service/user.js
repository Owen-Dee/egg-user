'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async findAll() {
        const users = [{
            id: '10001',
            name: 'Shanke',
            age: 22,
            address: 'Shanghai',
            role: 'Admin'
        }, {
            id: '10002',
            name: 'Alice',
            age: 23,
            address: 'Shanghai',
            role: 'Manager'
        }];
        this.ctx.status = 200;
        
        return users;
    }

    async findById(id) {
        const user = {
            id: '10001',
            name: 'Shanke',
            age: 22,
            address: 'Shanghai',
            role: 'Admin'
        };
        this.ctx.status = 200;

        return user;
    }

    async update(id, body) {
        // const user = await this.ctx.model.User.findOne({ where: { id: id } });
        // console.info(user);
        // await user.update(body);
        // this.ctx.status = 200;

        // return Object.assign({}, {
        //     data: user
        // });
    }
}

module.exports = UserService;