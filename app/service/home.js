'use strict';

const fs = require('fs');

const Service = require('egg').Service;

class HomeService extends Service {
    async getAllUsers() {
        const ctx = this.ctx;
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
}

module.exports = HomeService;