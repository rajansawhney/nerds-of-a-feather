const routes = require('../config/routes.js');
const organization = require('../controllers/organizationController');

module.exports = function () {
    app.get(routes.GET_ORGANIZATIONS, organization.getAll);

    app.get(routes.GET_ORGANIZATION_BY_ID, organization.getByID);

    app.post(routes.POST_ORGANIZATION, organization.createOrUpdate);

    app.delete(routes.DELETE_ORGANIZATION, organization.delete);
};
