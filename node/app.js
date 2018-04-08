const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const OrganizationModel = require('./models/organizationModel');
const ProjectModel = require('./models/projectModel');
const EventModel = require('./models/eventModel');
const UserModel = require('./models/userModel');

// mongoose connection
mongoose.Promise  = global.Promise;
let ecanDB = null;

// mongoose.connect('mongodb://localhost')
mongoose.connect('mongodb://ec2-35-168-22-26.compute-1.amazonaws.com/ECANdb')
    .then( client => {
        // console.log(JSON.stringify(client,null,2))
        console.log(`Connected to ECANdb`)
    })
    .catch( err => {
        console.error(`Unable to connect to ECANdb. Check if MongoDB instance is running
					   Run mongodb instance in another terminal using: mongod
                       ${err.stack}`);
    })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// pass routes from here
const organizationRoutes = require('./routes/organizationRoutes');
const projectRoutes = require('./routes/projectRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
organizationRoutes(app);
projectRoutes(app);
eventRoutes(app);
userRoutes(app);


app.listen(port);

console.log(`ECAN server started on: ` + port)

app.use(function(req, res, next) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});
