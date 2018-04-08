const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectModel = mongoose.model('ProjectModel');
const RequestError = require('../lib/Errors');

module.exports = {
    getAll: (req,res) => {
        return ProjectModel.find()
            .then(projectDocuments => res.status(200).send(projectDocuments))
            .catch(error => {
                console.log(error);
                res.status(error.status || 500).send(error);
            })
    },

    getByID: (req,res) => {
        return ProjectModel.findOne({ _id: req.params.project_id})
        .then(projectDocument => res.status(200).send(projectDocument))
        .catch(error => {
            console.log(error);
            res.status(error.status || 500).send(error);
        })
    },

    createOrUpdate : (req,res) => {
        if(!req.params.project_id){
            return ProjectModel.create(req.body)
                .then(newProjectDocument => res.status(200).send(newProjectDocument))
                .catch(error => {
                    console.log(error);
                    res.status(error.status || 500).send(error);
                });
        }
        else {
            return ProjectModel.findOne({_id: req.params.project_id})
                .then(foundProjectDocument => {
                    if(foundProjectDocument == null){
                        throw new RequestError(`Project ${req.params.project_id} not found`, 'NOT_FOUND');
                    }
                    const updateProjectDocument = foundProjectDocument;
                    _.forEach(req.body, (value, key) => {
                        updateProjectDocument[key] = value;
                    });

                        updateProjectDocument[key] = value;
                        return ProjectModel.update({ _id: req.params.project_id }, updatedRecord)
                        .then(result => {
                            res.status(200).send(result);
                        })
                })
                .catch(error => {
                    console.log(error);
                    res.status(error.status || 500).send(error);
                });
        }
    },

    deleteProject: (req, res, next) => {
        return ProjectModel.remove({ _id: req.params.project_id })
            .then(res.status(204).send({'msg': 'deleted'}))
            .catch(error => {
                console.log(error);
                return res.status(error.status || 500).send(error);
            });
    }
}