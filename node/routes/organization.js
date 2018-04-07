const mongoose = require('mongoose');
const routes = require('../config/routes.js');

module.exports = function () {
    app.get(routes.GET_ORGANIZATIONS, function (req, res, next) {
        res.status(200).send({ message: 'SUCCESS' });
    });
}