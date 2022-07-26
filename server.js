const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');



const PORT = 3000;
=
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://chrisjamali:<password>@flashcard-app.gow4hnt.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// get all flashcard stacks r
mongoose.connect(
  'mongodb+srv://chrisjamali:CXNyyJWH5IAkWWwt@flashcard-app.gow4hnt.mongodb.net/?retryWrites=true&w=majority'
).then(()=>{

  // const Flashcard = mongoose.model('flashcard', flashcardSchema);

  // const newFlashcard = new Flashcard({
  //   question: 'Why is water wet?',
  //   answer: 'slay',
  // });

  // newFlashcard.save();
  console.log('LISTENING');
  app.listen(PORT)


}).catch(err => {
  console.log(err);
});
//username : chrisjamali
// password : CXNyyJWH5IAkWWwt
