const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://chrisjamali:CXNyyJWH5IAkWWwt@flashcard-app.gow4hnt.mongodb.net/?retryWrites=true&w=majority';

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'flashcard-app',
// }).then(() => console.log('Connected to Mongo DB.'))
//   .catch((err) => console.log(err));

mongoose
  .connect(uri, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'flashcard-app',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const setSchema = new mongoose.Schema({
  name: String,

});

const Set = mongoose.model('set', setSchema);

const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  set_id :{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'set'},
    set_name : String,
});

const Flashcard = mongoose.model('flashcard', flashcardSchema);

// const newFlashcard = new Flashcard({
// question: "Why is water wet?",
// answer: "slay",
// })

// newFlashcard.save();

module.exports = { Set, Flashcard};
