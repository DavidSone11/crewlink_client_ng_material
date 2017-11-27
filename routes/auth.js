
var user = require("../models/user.js");
module.exports = {
    login: function (req, res) {

        var username = req.body.username || '';
        var password = req.body.password || '';
        var name = 'anurag';
        user.findOne({'userName' : new RegExp(name, 'i')}, function(err, doc) {
           console.log(doc);
          });

        if (username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }


    }


}