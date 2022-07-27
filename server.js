const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRouter = require('./routes/routes');


const PORT = 3000;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://chrisjamali:CXNyyJWH5IAkWWwt@flashcard-app.gow4hnt.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, './client')) );

/**
 * define route handlers
 */
app.use('/', apiRouter);




app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// get all flashcard stacks r
mongoose.connect(
  uri
).then(()=>{

  console.log('LISTENING to port 3000');
  app.listen(PORT)


}).catch(err => {
  console.log(err);
});
//username : chrisjamali
// password : CXNyyJWH5IAkWWwt
