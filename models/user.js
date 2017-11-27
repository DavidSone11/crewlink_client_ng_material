
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({ 
    userName: 'string', 
    firstName: 'string',
    lastName: 'string',
    password: 'string',
    email:'string',
    roleCode:'string',
    createdTime    : { type: Date, required: true, default: Date.now }

});
var user = mongoose.model('user', userSchema);
