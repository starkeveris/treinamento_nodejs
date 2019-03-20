const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-motbi.mongodb.net/${process.env.DB_HOST}?retryWrites=true`;

const mongooseConnection = mongoose.connection;

mongoose.connect(uri, {useNewUrlParser: true});

mongooseConnection.on('error', () => {
  console.log('Error in the coonection');
  process.exit(1);
});

mongooseConnection.once('open', function() {
    console.log('We are connected!');
});

