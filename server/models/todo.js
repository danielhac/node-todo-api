var mongoose = require('mongoose');

//Create a model of the DB
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true      // removes pre/post white space
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo2 = new Todo({
//     text: '   hola     amigo      '
//     // completed: true,
//     // completedAt: 4
// });
//
// newTodo2.save().then((doc) => {
//     console.log('Saved...', doc);
// }, (e) => {
//     console.log('Cannot save', e);
// });

module.exports = {
    Todo: Todo
};