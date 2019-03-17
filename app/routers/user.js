'use strict';

module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/users', controller.user.getAllUsers);
    router.get('/user/:id', controller.user.getUserById);  
    router.get('/user-edit/:id', controller.user.showEditUserInfo); 
    router.put('/user/:id', controller.user.updateUser);

    // router.post('/user', controller.user.add);
    // router.del('/user/:id', controller.user.delete);
};