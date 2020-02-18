'use strict';
const db = require('../models') ;
const user = db.User;
exports.index = function (req,res) {
  user.findAll().then(users=>{
        console.log(users);
        res.send(users) ;
    }).catch(error =>console.log(error)) ;
    /*Task.getAllTask(function (err,task) {
         if (err) res.send(err);
         res.send(task);
    });*/

};
exports.store = function (req,res) {
    /*console.log(req);
    let newTask = new Task(req.body);
    if (!newTask.task || !newTask.status){
       res.status(400).send({error:true,message:"Please provide task/status"})
    } else{
        Task.createTask(newTask, function(err, task) {

            if (err) res.send(err);
            res.json(task);
        });
    }*/

};
exports.show = function (req,res) {

    /*Task.getTaskById(req.params.taskId, function(err, task) {
        if (err) res.send(err);
        if(task.length < 1){
            res.json({error:true,message:"Task Not Found"});
        }
        res.json(task);
    });*/
};
exports.update = function (req,res){
    /*Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
        if (err) res.send(err);
        res.json(task);
    });*/

};
exports.destroy = function (req,res) {
   /* Task.remove( req.params.taskId, function(err, task) {
        if (err) res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });*/

} ;
