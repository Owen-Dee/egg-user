'use strict';

const fs = require('fs');

const Service = require('egg').Service;

class HomeService extends Service {
    async getAllUsers() {
        const ctx = this.ctx;
        try {
            // const data = await fs.readFile('../public/data/user.json');
            // const users = data.users;
            // await fs.readFileSync(process.cwd() + '/app/data/users.json', 'utf-8', (err, data) => {
            //     if (err) {
            //         console.error(err.message);
            //         return [];
            //     }

            //     console.log('Data: ' + data);

            //     debugger

            //     return [];           

            // });

            const data = await fs.readFileSync(process.cwd() + '/app/public/data/users.json', 'utf-8');
            console.log('Data: ' + data);

            return data.users;

        } catch (error) {
            console.error('Get users info error: ' + error);
        }


        // const users = [{
        //     id: '10001',
        //     name: 'Shanke',
        //     age: 22,
        //     address: 'Shanghai',
        //     role: 'Admin'
        // }, {
        //     id: '10002',
        //     name: 'Alice',
        //     age: 23,
        //     address: 'Shanghai',
        //     role: 'Manager'
        // }];

        // return users;
    }
}

module.exports = HomeService;