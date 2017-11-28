var Promise = require("bluebird");
var user = require("../models/user.js");
var m = require("moment");
var jwt = require("jwt-simple");

module.exports = {

    login: function (req, res) {
        var username = req.body.username || '';
        var password = req.body.password || '';
        if (username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        var promise = validate(username, password).then(function (dbUserObj) {

            if (!dbUserObj) { // If authentication fails, we send a 401 back
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
                return;
            }
            // If authentication is success, we will generate a token
            // and dispatch it to the client
            if (dbUserObj) {
                return res.json(genToken(dbUserObj));
            }
        });
    },
   

}
function validate(username, password) {
    return new Promise(function (resolve, reject) {
        user.find({ $and: [{ "userName": username }, { "password": password }] }, function (err, doc) {
            if (err) {
                reject({ error: err });
            }
            if (doc) {
                resolve(doc);
            }
        });
    });
}

function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());
 
  return {
    token: token,
    expires: expires,
    user: user
  };
}
 
function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

