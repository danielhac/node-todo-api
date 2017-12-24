// const MongoClient = require('mongodb').MongoClient; // mongo client - which connects to server
const {MongoClient, ObjectID} = require('mongodb'); // mongo client - with destructuring // ObjectID: make new object ID's on the fly

// the URL where DB lives, locally or externally like AWS or Heroku
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Cannot connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // Get everything in db
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Cannot fetch data', err);
    // });

    // Get all db that has props: 'completed: false'
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Cannot fetch data', err);
    // });

    // Get all db that has props: _id: 5a3cab8a14a114cfe91d5081
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a3cab8a14a114cfe91d5081')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Cannot fetch data', err);
    // });

    // Get number of collections in DB
    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count: ' + count);
    // }, (err) => {
    //     console.log('Cannot fetch data', err);
    // });

    // Get all db that has props: 'name: Dan'
    db.collection('Users').find({name: 'Dan'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Cannot fetch data', err);
    });

    // db.close();
});