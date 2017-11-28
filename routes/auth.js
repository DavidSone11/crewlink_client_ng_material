var Promise = require("bluebird");
var user = require("../models/user.js");
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

        var promise = validate(username, password);
        promise.then(function (dbUserObj) {
            return res.json(dbUserObj);
        })
    },


}
function validate(username, password) {
    return new Promise(function (resolve, reject) {
        user.find({ $and: [{ "userName": username }, { "password": password }] }, function (err, results) {
            if (err) {
                reject({ error: err });
            }
            if (doc.length > 1) {
                resolve(results);
            }
        });
    });
}
