const express = require('express');
const app = express();
const mongoose = require('mongoose');

//export controller
const controller = require('../controllers/controllers.js')
const router = express.Router();

//get one stack
router.get('/set/:set_id', controller.getSet, (req,res)=> {
  res.status(200).json(res.locals.set)
})



// get all stacks 
router.get('/sets', controller.getAllSets, (req, res) => {
  res.status(200).json(res.locals.sets);
});
// create new stack 
router.post('/newset', controller.createSet, (req, res) => {
 'res.locals from set router POST =', res.locals;
  res.status(200).json(res.locals.newSet);
});




// update stack preexisitng 

// delete a whole stack
router.delete('/deleteStack/:stack_name', controller.deleteStack, (req,res)=> {
  res.send()
})
// get cards from individual stack ?
router.get('/getAllFlashcards/:set_id', controller.getAllCardsFromSet, (req,res)=> {
  res.status(200).json(res.locals.flashcards);
})
// create a new card
router.post('/newflashcard/:set_id/:set_name',controller.createFlashcard, (req,res)=>{
    console.log('res.locals from flash card router POST =',res.locals);
res.status(200).json(res.locals.newCard)
} )
// update a prexisiting card

// delete a preexisiting card


//add foto
router.post(
  '/addphoto',
  controller.addPhoto,
  (req, res) => {
    console.log('res.locals from flash card router POST =', res.locals);
    res.status(200).json(res.locals.newFoto);
  }
);

module.exports = router;

