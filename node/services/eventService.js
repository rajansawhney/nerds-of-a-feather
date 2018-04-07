const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventModel = mongoose.model('EventModel')

module.exports = () => {
    createOrUpdate : (req,res) => {
        if(!req.params.event_id){
            EventModel.save(req.body)
                .then(newEventDocument => res.status(200).send(newEventDocument))
                .catch(error => {
                    console.log(error);
                    res.status(error.status || 500).send(error);
                });
        }
        else {
            EventModel.findOne({_id: req.params.event_id})
                .then(foundEventDocument => {
                    if(foundEventDocument == null){
                        res.status(401).send(err)
                    }
                    const updateEventDocument = foundEventDocument;
                    _.forEach(req.body, (value, key) => {
                        updateEventDocument[key] = value;
                    });

                        updateEventDocument[key] = value;
                        return EventModel.update({ _id: ObjectId(req.params.event_id) }, updatedRecord)
                        .then(result => {
                            res.status(200).send(result);
                        })
                })
                .catch(error => {
                    console.log(error);
                    res.status(error.status || 500).send(error);
                });
        }
    };

    getAll: (req,res) => {
        EventModel.find()
            .then(eventDocuments => res.status(200).send(eventDocuments))
            .catch(error => {
                console.log(error);
                res.status(error.status || 500).send(error);
            })
    };

    getByID: (req,res) => {
        EventModel.findOne({ _id: ObjectId(req.params.event_id) })
        .then(eventDocument => res.status(200).send(eventDocument))
        .catch(error => {
            console.log(error);
            res.status(error.status || 500).send(error);
        })
    };

    deleteEvent: (req, res, next) => {
        EventModel.remove({ _id: ObjectId(req.params.event_id) })
            .then(res.status(204).send({'msg': 'deleted'}))
            .catch(error => {
                console.log(error);
                return res.status(error.status || 500).send(error);
            });
    };
}