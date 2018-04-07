const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name : {
        type: String,
        required: 'Kindly enter the project name'
    },
    description: {
        type: String
    },
    startDate: {
        type : Date
    },
    endDate: {
        type : Date
    },
    owner: {
        id:{
            type: ObjectId,
            required: 'objectId of the organization is needed'
        },
        name:{
            type: String
        }
    },
    status: {
        type: String,
        enum : ['not_started', 'in_progress', 'completed'],
        default: 'not_started'
    },
    viewabilty: {
        type: String,
        enum: ['public', 'private'],
        default: 'public'
    },
    tags: {
        type: [String]
    },
    events: {
        type: [Schema.Types.ObjectId]
    }
});

module.exports = mongoose.model('ProjectModel', ProjectSchema)