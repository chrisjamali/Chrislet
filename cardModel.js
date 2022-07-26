
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://chrisjamali:<password>@flashcard-app.gow4hnt.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'flashcard-app',
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const flashcardSchema = new mongoose.Schema({
    question: String,
    answer: String, 
  
})

const Flashcard = mongoose.model('flashcard', flashcardSchema)

const newFlashcard = new Flashcard({
question: "Why is water wet?",
answer: "slay",
})

newFlashcard.save();


module.exports = Flashcard
