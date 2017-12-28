const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all
// Todo.remove({}).then((result) => {
//     console.log(result);
// });
//
// // Remove one
Todo.findOneAndRemove({_id: '5a446ec5736094c4bfc6e0ab'}).then((todo) => {

});

Todo.findByIdAndRemove('5a446ec5736094c4bfc6e0ab').then((todo) => {
    console.log(todo);
});