import StartFirebase from './firebaseApp';

const fs = require('fs').promises;
const firebase = require(firebase);

const upload = async () => {
  const questionsJSON = await fs.readFile('questions.json');
  const questions = JSON.parse(questionsJSON);
  console.log(questions.length);

  const database = firebase.database();
  const ref = database.ref('/react-quiz/questions');
  questions.forEach(q => {
    ref.push(q);
  });
  console.log('complete');
};

upload();
