const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required: 'Kindly enter the project name'
    },
    userName: {
        type: String
    },
    password:{
        type: String
    },
    organization: {
        id:{
            type: ObjectId,
            required: 'objectId of organation is required for a user'
        },
        name:{
            type: String
        }
    },
    loginPermission:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Project', PropjectSchema)