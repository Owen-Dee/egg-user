class Portal {
    static _instance = null;

    constructor() {

    }

    service(url, type, data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                type: type,
                data: data,
                dataType: 'json',
                success: (result)=> {
                    resolve(result);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    }

    init() {
        this.AddEventListener();
    }

    AddEventListener() {
        const elements = {
            detailDom: $('.user-table-container .show-user-detail'),
            editDom: $('.user-table-container .edit-user')
        };

        elements.detailDom.off('click').on('click', function() {
            const id = $(this).attr('data-id');
            window.location.href = `${window.location.origin}/user/${id}`;
        });

        elements.editDom.off('click').on('click', () => {

        });
    }

    getUsers() {
        const url = '/users';
        const type = 'Get';
        const data = null;
        this.service(url, type, data).then((result) => {
            debugger
            console.log(result);
        }).catch((error) => {
            console.error('Get users info error: ' + error);
        });
    }

    getUserById() {
        const url = '/user/1';
        const type = 'Get';
        const data = null
        this.service(url, type, data).then((result) => {
            debugger
            console.log(result);
        }).catch((error) => {
            console.error('Get users info error: ' + error);
        }); 
    }

    update() {
        const url = '/user/1';
        const type = 'Put';
        const data = {
            age: 33
        };
        this.service(url, type, data).then((result) => {
            debugger
            console.log(result);
        }).catch((error) => {
            console.error('Get users info error: ' + error);
        });  
    }

    static getInstance() {
        Portal._instance = Portal._instance || new Portal();

        return Portal._instance;
    }
}

let portal = Portal.getInstance();
portal.init();