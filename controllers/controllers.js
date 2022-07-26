const { Set, Flashcard } = require('../cardModel');
const mongoose = require('mongoose');
const flashcardController = {};

//create flashcard
flashcardController.createFlashcard = async (req, res, next) => {
  try {
    console.log('param from create flashcard controller', req.body);
    console.log(
      'quieries from create flashcard controller',
      req.params.set_id.slice(1)
    );
    console.log('I AM THE NAME OF SET', req.params.set_name)
    const { question, answer } = req.body;
    const stringID = req.params.set_id.slice(1);
    var objectId = mongoose.Types.ObjectId(stringID.trim());
    const set_id = objectId;
    const { set_name } = req.params;
    const newCard = await Flashcard.create({ question, answer, set_id, set_name });

    res.locals.newCard = newCard;
    return next();
  } catch (err) {
    console.log(err);
  }
};

//get all flashcards from set
flashcardController.getAllCardsFromSet = async (req, res, next) => {
  
  try {
    console.log('from the all cards from set', req.params.set_id);
    // const stringID = req.params.set_id;
    // var objectId = mongoose.Types.ObjectId(stringID.trim());
    // const set_id = objectId;
  /* Finding all the flashcards that have the same set_id as the set_id that was passed in. */
    const allCards = await Flashcard.find({ set_name: req.params.set_id });
    // const setName = await Set.findOne({_id: set_id})
  //   const name = setName.name
  //  const parsed = JSON.parse(allCards)
  //  parsed.forEach( x => x.setName = name)
  //   const json= JSON.stringify(parsed)
  //   console.log(json);
    console.log('SET NAME = ', allCards)
    res.locals.flashcards = allCards

    return next();
  } catch (err) {
    console.log(err);
  }
  // useEffect(() => {
  //   axios('/api/sets').then((data) => {
  //     console.log('FROM THEN HANDLER', data.data);
  //     // console.log('RESPOSNE',data.name)
  //     console.log(sets);
  //     return setSets(data.data);
  //     //  console.log('this is my STATE', state)
  //   });
  // }, []);
};

//Get all Sets
flashcardController.getAllSets = async (req, res, next) => {
  try {
    // console.log(req);
    // console.log(req.originalUrl);

    const sets = await Set.find({});
    console.log(sets)
    // console.log('from get all sets controller', sets);
    res.locals.sets = sets;

    return next();
  } catch (error) {
    console.log(error);
  }
};

// Create New Set
flashcardController.createSet = async (req, res, next) => {
  console.log('from the controller', req.body);

  const { name } = req.body;

  const newSet = await Set.create({ name });
  console.log(newSet);
  res.locals.newSet = newSet;
  return next();
};

flashcardController.getSet = async (req, res, next) => {
  console.log('from the controller', req.params);

 const stringID = req.params.set_id;
 var objectId = mongoose.Types.ObjectId(stringID.trim());
 const _id = objectId;
const seet = await Set.findOne({_id})
res.locals.set = seet
  return next();
};

flashcardController.deleteStack = async (req,res,next) => {

 const {stack_name} = req.params
const deltet =  await Set.deleteOne({name:stack_name})
const cardDelete = await Flashcard.deleteMany({set_name: stack_name})
res.locals.deleted = deltet;
return next()
}

flashcardController.addPhoto = async (req,res,next) => {
try{
const req = await req.body
console.log(req);

}
catch(err)
{console.log(err);}
}

module.exports = flashcardController;
