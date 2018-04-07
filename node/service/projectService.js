const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectModel = mongoose.model('ProjectModel')

module.exports = () => {
    createOrUpdate : (req,res) => {
        if(!req.params.project_id){
            ProjectModel.save(req.body)
                .then(newProjectDoument => res.send(newProjectDocument))
                .catch(err => res.send(err))
        }
        else {
            ProjectModel.findOne({_id: req.params.project_id})
                .then(foundProjectDocument => {
                    if(foundProjectDocument == null){
                        res.status(401).send(err)
                    }
                })
                .then(newProjectDoument => res.send(newProjectDocument))
                .catch(err => res.send(err))
        }
    }
}