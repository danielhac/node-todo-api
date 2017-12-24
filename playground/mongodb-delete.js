// const MongoClient = require('mongodb').MongoClient; // mongo client - which connects to server
const {MongoClient, ObjectID} = require('mongodb'); // mongo client - with destructuring // ObjectID: make new object ID's on the fly

// the URL where DB lives, locally or externally like AWS or Heroku
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Cannot connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // deleteMany - will delete all whatever was passed in
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteMany - will delete all whatever was passed in
    db.collection('Users').deleteMany({name: 'Dan'}).then((result) => {
        console.log(result);
    });

    // deleteOne - will delete one whatever was passed in
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne - will delete an ID
    // db.collection('Users').deleteOne({
    //     _id: new ObjectID('5a3cab5b14a114cfe91d506a')
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete - will delete the first one whatever was passed in
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.close();
});