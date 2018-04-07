const _ = require('lodash');
const api = {
    prefix: 'http://soar.ecan.com/soar',
    version: 'v1'
};

const endpoints = {
    GET_ORGANIZATION_BY_ID: '/organization/:organization_id',

    POST_ORGANIZATION: '/organization/:organization_id?',

    DELETE_ORGANIZATION: '/organization/:organization_id',

    GET_ORGANIZATIONS: '/organizations'
};

module.exports = _.mapValues(endpoints, 
    endpointURL => `${api.prefix}/${api.version}${endpointURL}`
);