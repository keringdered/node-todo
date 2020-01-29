const express = require('express'),
    app = express(),
    db = require('./src/db.js'),
    bodyParser = require('body-parser');
    port = process.env.PORT || 3000;
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./src/routes/appRoutes'); //importing route
routes(app); //register the route
