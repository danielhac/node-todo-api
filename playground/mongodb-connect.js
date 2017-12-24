// const MongoClient = require('mongodb').MongoClient; // mongo client - which connects to server
const {MongoClient, ObjectID} = require('mongodb'); // mongo client - with destructuring // ObjectID: make new object ID's on the fly

// var obj = new ObjectID(); // Create new ID's
// console.log(obj);

// Object destructuring - pull out props from object creating variables - example follows
// var user = {name: 'dan', age: 21};
// var {name} = user;
// console.log(name);

// the URL where DB lives, locally or externally like AWS or Heroku
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Cannot connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert data', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)); // ops stores all docs that were inserted
    // });

    db.collection('Users').insertOne({
        name: 'Dan',
        age: '21',
        location: 'Compton, CA'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert data', err);
        }
        // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});