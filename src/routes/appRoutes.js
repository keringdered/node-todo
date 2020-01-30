'use strict';
module.exports = function(app) {
    let todo = require('../controllers/appController');
    /*root routes*/
     app.get('/',function (request,response) {
         let appName =process.env.APP_NAME;
         response.send("<h1>Welcome To Node JS "+appName+"</h1>")
     });
    // todo Routes
    app.route('/tasks')
        .post(todo.store)
        .get(todo.index);

    app.route('/tasks/:taskId')
        .get(todo.show)
        .put(todo.update)
        .delete(todo.destroy);
};
