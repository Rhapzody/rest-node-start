var con = require('../database/connection');

module.exports.getAllUsers = function() {
    return new Promise(function(resolve, reject) {
        con.query("SELECT * FROM user", function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports.getUserById = function(id) {
    return new Promise(function(resolve, reject) {
        con.query(`SELECT * FROM user where id=${id}`, function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    });
}