const routes = require('../config/routes.js');
const project = require('../services/projectService');

module.exports = function () {
    app.get(routes.GET_PROJECTS, project.getAll);

    app.get(routes.GET_PROJECT_BY_ID, project.getByID);

    app.post(routes.POST_PROJECT, project.createOrUpdate);

    app.delete(routes.DELETE_PROJECT, project.deleteProject);
};
