#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Cards = require('./models/cards')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser:true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


function cardCreate(name, alias_name, color, type, main_effect, deposit_effect, loot_effect, cb) {
  carddetail = {
    name:name,
    alias_name:alias_name,
    color:color,
    type:type,
    main_effect:main_effect,
    deposit_effect:deposit_effect,
    loot_effect:loot_effect
  };

  var card = new Cards(carddetail);

  card.save(function(err){
    if (err){
      cb(err, null);
      return
    }
    console.log('New Card: ' + card);
    cb(null,card);
  });
};



function createCards(cb) {
    async.series([
        function(callback) {
          cardCreate('novice_card','Novice Card Effect','gray','weapon','Max HP +50, Max SP +10','Max HP +48','Max HP +48', callback);
        },
        function(callback) {
          cardCreate('poring_card','Poring Card Effect','gray','armor','LUK +1, FLEE +1','FLEE +2','DEF +2',callback);
        },
        function(callback) {
          cardCreate('lunatic_card','Lunatic Card Effect','gray','weapon','LUK +1, CRIT +1','ATK +4.5','ATK +3', callback);
        },
        ],
        // optional callback
        cb);
}

async.series([
    createCards
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('SUCCESS:');
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



