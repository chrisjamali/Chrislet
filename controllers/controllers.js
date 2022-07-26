const { Set, Flashcard } = require('../cardModel');

const flashcardController = {};

//create flashcard
flashcardController.createFlashcard = async (req, res, next) => {
  try {
      console.log('param from create flashcard controller', req.body);
       console.log('quieries from create flashcard controller', req.query)
    const { question, answer } = req.body;
    const {set_id} = req.query

    const newCard = await Flashcard.create({ question, answer, set_id });

    res.locals.newCard = newCard;
    return next();
  } catch (err) {
    console.log(err);
  }
};

//get all flashcards from set
flashcardController.getAllCardsFromSet = async (req, res, next) => {
  console.log('from the all cards from set', req.body);

  const { name } = req.body;

  const newSet = await Set.create({ name });
  res.locals.newSet = newSet;
  return next();
};



flashcardController.createSet = async (req, res, next) => {
  console.log('from the controller', req.body);

  const { name } = req.body;

  const newSet = await Set.create({ name });
  res.locals.newSet= newSet;
  return next();
};

module.exports = flashcardController;
