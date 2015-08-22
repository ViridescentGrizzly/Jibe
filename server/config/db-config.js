// db-config.js -- set up database connection and schema
// ----------------------------------------------
var BluebirdPromise = require('bluebird');
var mongoose = require('mongoose');

var uri = process.env.MONGO_URI || 'mongodb://localhost:27017/grizzly';
// var bcrypt = require('bcrypt-nodejs');

// Connect to Grizzly 
mongoose.connect('mongodb://localhost:27017/grizzly');

// Define party schema
var partySchema = mongoose.Schema ({
  name: { type: String, index: { unique: true } },
  playlist: { type: Array , default: [] }
});

var Party = mongoose.model('Party', partySchema);

module.exports = Party;




var party1 = new Party({
  name: 'stevensDopePartyJam',
  playlist: []
});

var party2 = new Party({
  name: 'grizzly.party',
  playlist: []
});


party1.save( function(err, party) { 
  if (err) {console.log('party already in DB');} 
  else {console.log('successfully added');}
});
party2.save( function(err, party) { 
  if (err) {console.log('party already in DB');} 
  else {console.log('successfully added');}
});



