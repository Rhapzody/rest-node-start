let mysql = require('mysql');
let config = require('./db-config');
console.log('Database: ' + config.database + ', Host: ' + config.host + ', CONNECTED!! ');
let con = mysql.createConnection(config);
con.connect(function(err) {
    if (err) throw err;
});
module.exports = con;