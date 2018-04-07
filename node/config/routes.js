const _ = require('lodash');
const api = {
    prefix: 'http://soar.ecan.com/soar',
    version: 'v1'
};

const endpoints = {
    /*
     * Organization endpoints
     */
    GET_ORGANIZATION_BY_ID: '/organization/:organization_id',

    POST_ORGANIZATION: '/organization/:organization_id?',

    DELETE_ORGANIZATION: '/organization/:organization_id',

    GET_ORGANIZATIONS: '/organizations',

    /*
     * Project endpoints
     */
    GET_PROJECTS: '/projects',

    GET_PROJECT_BY_ID: '/project/:project_id',

    POST_PROJECT: '/project/:project_id?',

    DELETE_PROJECT: '/project/:project_id',

    /*
     * Event endpoints
     */
    GET_EVENTS: '/events',

    GET_EVENT_BY_ID: '/event/:event_id',

    POST_EVENT: '/event/:event_id?',

    DELETE_EVENT: '/event/:event_id',

    /*
     * User endpoints
     */
    GET_USERS: '/users',

    GET_USER_BY_ID: '/user/:user_id',

    POST_USER: '/user/:user_id?',

    DELETE_USER: '/user/:user_id'
};

module.exports = _.mapValues(endpoints, 
    endpointURL => `${api.prefix}/${api.version}${endpointURL}`
);