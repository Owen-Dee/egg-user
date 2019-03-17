class Edit {
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
        const _this = this;
        const elements = {
            name: $('.user-info .name'),
            age: $('.user-info .age'),
            address: $('.user-info .address'),
            role: $('.user-info .role'),
            saveBtn: $('.user-info .save-btn')
        };

        elements.saveBtn.off('click').on('click', function() {
            const id = $(this).attr('data-id');
            const name = elements.name.val();
            const age = elements.age.val();
            const address = elements.address.val();
            const role = elements.role.val();
            const user = {
                name: name,
                age: Number(age),
                address: address,
                role: role
            };
            _this.updateUser(id, user);
        });
    }

    updateUser(id, user) {
        const url = `/user/${id}`;
        const type = 'Put';
        this.service(url, type, user).then((result) => {
            if (!result) {
                return;
            }

            console.log(result);

            if (result.message === 'Success') {
                window.location.href = `${window.location.origin}/user/${id}`;
            }
        }).catch((error) => {
            console.error('Update user info error: ' + error);
        });  
    }

    static getInstance() {
        Edit._instance = Edit._instance || new Edit();

        return Edit._instance;
    }
}

let edit = Edit.getInstance();
edit.init();