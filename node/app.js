const express = require('express'),
                app = express(),
                port = process.env.PORT || 3000,
                mongoose = require('mongoose'),
                OrganizationModel = require('../models/organiztionModel'),
                ProjectModel = require('../models/projectModel'),
                EventModel = require('../models/eventModel'),
                UserModel = require('../models/userModel');

// mongoose connection
mongoose.Promise  = global.Promise;

mongoose.connect('mongodb://localhost/ECANdb')
    .then( () => {
        console.log(`Connected to ECANdb`)
    })
    .catch( err => {
        console.error(`Unable to connect to ECANdb. Check if MongoDB instance is running" +
								"\nRun mongodb instance in another terminal using: mongod" +
								"\n\nError:\n", err.stack`);
    })


// pass routes from here?
const routes = require('../routes/organization');
// const routes = require('../routes/project');
// const routes = require('../routes/organization');
                