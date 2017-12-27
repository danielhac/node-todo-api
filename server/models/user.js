var mongoose = require('mongoose');

// Create model for DB
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    }
});

// var newUser = new User({
//     email: 'dan@dan.com'
// });
//
// newUser.save().then((doc) => {
//     console.log('Saved user ', doc);
// }, (e) => {
//     console.log('Cannot save user ', e);
// });

module.exports = {
    User: User
};