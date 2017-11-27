var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/auth', function (req, res) {
 
 
 // User.findById(req.params.id, function (err, user) {
   //   if (err) return res.status(500).send("There was a problem finding the user.");
    //  if (!user) return res.status(404).send("No user found.");
    //  res.status(200).send(user);
  //});
  res.status(200).send("DSAD");
});
module.exports = router;
