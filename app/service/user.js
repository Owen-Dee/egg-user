'use strict';

const fs = require('fs');
const Service = require('egg').Service;

class UserService extends Service {
    async getAllUsers() {
        try {
            const data = await fs.readFileSync(process.cwd() + '/app/public/data/users.json', 'utf-8');
            if (!data) {
                return [];
            }

            const res = JSON.parse(data);
            const users = res.users ? res.users : [];
            console.log('Data: ' + data);

            return users;

        } catch (error) {
            console.error('Get users info error: ' + error);
        }
    }

    async getUserById(id) {
        let user = {};
        try {
            const data = await fs.readFileSync(process.cwd() + '/app/public/data/users.json', 'utf-8');
            if (!data) {
                return user;
            }

            const res = JSON.parse(data);
            const users = res.users ? res.users : [];
            users.forEach((item) => {
                if (item.id === id) {
                    user = item;
                }
            });

            return user;
        } catch (error) {
            console.error('Get users info error: ' + error);
        }
    }

    async updateUser(id, body) {
        let user = {};
        try {
            const data = await fs.readFileSync(process.cwd() + '/app/public/data/users.json', 'utf-8');
            if (!data) {
                return user;
            }

            const res = JSON.parse(data);
            const users = res.users ? res.users : [];
            users.forEach((item) => {
                if (item.id === id) {
                    for (let key in body) {
                        if (item[key]) {
                            item[key] = body[key];
                        }
                    }

                    user = item;
                }
            });

            res.users = users;
            const str = JSON.stringify(res);
            fs.writeFileSync(process.cwd() + '/app/public/data/users.json', str);

            return Object.assign({}, {
                message: 'Success'
            });
        } catch (error) {
            console.error('Get users info error: ' + error);
        }
    }
}

module.exports = UserService;