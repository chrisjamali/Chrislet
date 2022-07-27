const { Set, Flashcard } = require('../cardModel');

const flashcardController = {};

//create flashcard
flashcardController.createFlashcard = async (req, res, next) => {
  try {
    console.log('param from create flashcard controller', req.body);
    console.log('quieries from create flashcard controller', req.query);
    const { question, answer } = req.body;
    const { set_id } = req.query;

    const newCard = await Flashcard.create({ question, answer, set_id });

    res.locals.newCard = newCard;
    return next();
  } catch (err) {
    console.log(err);
  }
};

//get all flashcards from set
flashcardController.getAllCardsFromSet = async (req, res, next) => {
  console.log('from the all cards from set');

  const { name } = req.body;

  const newSet = await Set.create({ name });
  res.locals.newSet = newSet;
  return next();
};

//Get all Sets
flashcardController.getAllSets = async (req, res, next) => {
  try {
    console.log(req);
    const sets = await Set.find({});
  console.log('from get all sets controller',sets);
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
  res.locals.newSet = newSet;
  return next();
};



module.exports = flashcardController;
