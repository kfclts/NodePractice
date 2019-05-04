const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://USER:PASSWORD@cluster0-gzkx8.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
  .then( client => {
    console.log('Connected!')
    callback(client);
  })
  .catch( err => {
    console.log(err);
  });
}

module.exports = mongoConnect;