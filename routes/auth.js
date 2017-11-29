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
            if (dbUserObj.length > 0) {
                console.log(dbUserObj);
                var generatedToken = genToken();
                dbUserObj = {
                    email: dbUserObj[0]._doc.email,
                    role: dbUserObj[0]._doc.roleCode,
                    username: dbUserObj[0]._doc.userName,
                    token: generatedToken
                }
                res.cookie("x-access-token", generatedToken, { expires: new Date(generatedToken.expires) });
                res.cookie('x-key', dbUserObj.username);
                return res.json(dbUserObj);
            }
        });
    },

    logout: function (req, res) {
        cookie = req.cookies;
        for (var prop in cookie) {
            if (!cookie.hasOwnProperty(prop)) {
                continue;
            }
            res.cookie(prop, '', { expires: new Date(0) });
        }
        res.redirect('/');
    }


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

function genToken() {
    var expires = expiresIn(7); // 7 days
    var token = jwt.encode({
        exp: expires
    }, require('../config/secret')());

    return {
        token: token,
        expires: expires,
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

