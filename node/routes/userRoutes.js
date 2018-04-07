const routes = require('../config/routes.js');
const user = require('../services/userService');

module.exports = function () {
    app.get(routes.GET_USERS, user.getAll);

    app.get(routes.GET_USER_BY_ID, user.getByID);

    app.post(routes.POST_USER, user.createOrUpdate);

    app.delete(routes.DELETE_USER, user.deleteUser);
};
