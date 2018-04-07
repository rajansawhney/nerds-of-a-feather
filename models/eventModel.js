const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name : {
        type: String,
        required: 'Kindly enter the event name'
    },
    description: {
        type: String
    },
    eventDate:{
        type: Date
    },
    project: {
        id: ObjectId
    },
    owner: {
        id:{
            type: ObjectId,
            required: 'objectId of the organization (that owns the event) is needed'
        },
        name:{
            type: String
        }
    },
    tags: {
        type: [String]
    }
});

module.exports = mongoose.model('Event', EventSchema)