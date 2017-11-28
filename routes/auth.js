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

        var dbUserObj = validate(username, password);

        return res.json(dbUserObj);

    },


}
function validate(username, password) {

    user.find({ $and: [{"userName":username}, {"password": password}] }, function (err, doc) {
        if (doc.length > 1) {
            return doc;
        }
    });
}
