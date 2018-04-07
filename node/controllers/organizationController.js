const mongoose = require('mongoose'),
    OrganizationModel = mongoose.model('OrganizationModel');
const RequestError = require('../lib/Errors');

module.exports = function () {
    getAll: function (req, res, next) {
        OrganizationModel.find()
        .then(organizationRecords => {
            res.status(200).send(organizationRecords);
        })
        .catch(error => {
            console.log(error);
            res.status(error.status || 500).send(error);
        });
    },

    getByID: function (req, res, next) {
        OrganizationModel.findOne({ _id: ObjectId(req.params.organization_id) })
        .then(organizationRecord => {
            res.status(200).send(organizationRecord);
        })
        .catch(error => {
            console.log(error);
            res.status(error.status || 500).send(error);
        });
    },

    createOrUpdate: function (req, res, next) {
        if (req.params.organization_id) {
            console.log(`Updating organization: ${req.params.organization_id}`);

            return OrganizationModel.findOne({ _id: ObjectId(req.params.organization_id) })
                .then(organizationRecord => {
                    if (_.isEmpty(organizationRecord)) {
                        throw new RequestError(`Organization ${req.params.organization_id} not found`, 'NOT_FOUND');
                    }

                    const updatedRecord = organizationRecord;
                    _.forEach(req.body, function (value, key) {
                        updatedRecord[key] = value;
                    });

                    return OrganizationModel.update({ _id: ObjectId(req.params.organization_id) }, updatedRecord)
                        .then(result => {
                            res.status(200).send(result);
                        })
                        .catch(error => {
                            console.log(error);
                            res.status(error.status || 500).send(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                    res.status(error.status || 500).send(error);
                });
        }
        
        return OrganizationModel.save(req.body)
            .then(savedRecord => {
                res.status(201).send(savedRecord);
            })
            .catch(error => {
                console.log(error);
                res.status(error.status || 500).send(error);
            });
    },

    delete: function (req, res, next) {
        OrganizationModel.delete({ _id: ObjectId(req.params.organization_id) })
            .then(deletionResult => {
                return res.status(204).send(deletionResult);
            })
            .catch(error => {
                console.log(error);
                return res.status(error.status || 500).send(error);
            });
    }
};