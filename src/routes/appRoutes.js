'use strict';
module.exports = function(app) {
    let todo = require('../controllers/appController');

    // todo Routes
    app.route('/tasks')
        .post(todo.store)
        .get(todo.index);

    app.route('/tasks/:taskId')
        .get(todo.show)
        .put(todo.update)
        .delete(todo.destroy);
};
