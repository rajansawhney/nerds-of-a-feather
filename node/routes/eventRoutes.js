const routes = require('../config/routes.js');
const event = require('../services/eventService');

module.exports = function () {
    app.get(routes.GET_EVENTS, event.getAll);

    app.get(routes.GET_EVENT_BY_ID, event.getByID);

    app.post(routes.POST_EVENT, event.createOrUpdate);

    app.delete(routes.DELETE_EVENT, event.deleteEvent);
};
