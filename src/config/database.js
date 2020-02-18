const Sequelize  = require('sequelize');
const db =  new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});
db.authenticate().then(()=>{
    console.log('DB connected....')   ;
}) .catch(err => console.log(err));
module.exports = db;