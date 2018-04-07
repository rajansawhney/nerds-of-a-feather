const mongoose = require('mongoose');
const ProjectModel = mongoose.model('ProjectModel')

module.exports = () => {
    createOrUpdate : (req,res) => {
        if(!req.params.project_id){
            ProjectModel.save(req.body)
                .then(newProjectDocument => res.status(200).send(newProjectDocument))
                .catch(error => {
                    console.log(error);
                    res.status(error.status || 500).send(error);
                });
        }
        else {
            ProjectModel.findOne({_id: req.params.project_id})
                .then(foundProjectDocument => {
                    if(foundProjectDocument == null){
                        res.status(401).send(err)
                    }
                    const updateProjectDocument = foundProjectDocument;
                    _.forEach(req.body, (value, key) => {
                        updateProjectDocument[key] = value;
                    });

                        updateProjectDocument[key] = value;
                        return ProjectModel.update({ _id: ObjectId(req.params.project_id) }, updatedRecord)
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
        ProjectModel.find()
            .then(projectDocuments => res.status(200).send(projectDocuments))
            .catch(error => {
                console.log(error);
                res.status(error.status || 500).send(error);
            })
    };

    getByID: (req,res) => {
        ProjectModel.findOne({ _id: ObjectId(req.params.project_id) })
        .then(projectDocument => res.status(200).send(projectDocument))
        .catch(error => {
            console.log(error);
            res.status(error.status || 500).send(error);
        })
    };

    deleteProject: (req, res, next) => {
        ProjectModel.remove({ _id: ObjectId(req.params.project_id) })
            .then(res.status(204).send({'msg': 'deleted'}))
            .catch(error => {
                console.log(error);
                return res.status(error.status || 500).send(error);
            });
    };
}