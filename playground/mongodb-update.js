// const MongoClient = require('mongodb').MongoClient; // mongo client - which connects to server
const {MongoClient, ObjectID} = require('mongodb'); // mongo client - with destructuring // ObjectID: make new object ID's on the fly

// the URL where DB lives, locally or externally like AWS or Heroku
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Cannot connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a3f431b14a7fa8bbc790ff2')
    // }, {
    //     // $set: sets value of field in document - in this case, changing completed from false to now true
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     // returnOriginal: return original value - in this case, we would like to see the new change so, false
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // Update one - take ID and update name and increment age by 1
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a3ca8a23a01f864ac3f871c')
    }, {
        $set: {
            name: 'Bob'
        },
        $inc: {
            age: 1
        }

    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    // db.close();
});