const routes = require('../config/routes.js');
const {getAll, getByID, createOrUpdate, deleteUser} = require('../services/userService');

module.exports = function (app) {

    console.log('GET_ORGANIZATIONS',routes.GET_USERS);
    console.log('getAll',getAll);

    app.get(routes.GET_USERS, getAll);

    app.get(routes.GET_USER_BY_ID, getByID);

    app.post(routes.POST_USER, createOrUpdate);

    app.delete(routes.DELETE_USER, deleteUser);
};
