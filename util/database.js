const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://USER:PASSWORD@cluster0-gzkx8.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
  .then( client => {
    console.log('Connected!')
    _db = client._db();
    callback();
  })
  .catch( err => {
    console.log(err);
    throw err;
  });
}
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
}

module.mongoConnect = mongoConnect;
module.getDb = getDb;