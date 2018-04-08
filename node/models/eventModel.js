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
    projectID: {
        type: Schema.Types.ObjectId
    },
    organization: {
        id:{
            type: Schema.Types.ObjectId,
            required: 'objectId of the organization (that owns the event) is needed'
        },
        name:{
            type: String
        }
    },
    private: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String]
    }
});

module.exports = mongoose.model('EventModel', EventSchema)