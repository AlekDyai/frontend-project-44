import * as readlineSync from 'readline-sync';
// Объявление глобальных переменных
let userName;
let sign;
let firstRandomNumber;
let secondRandomNumber;
let resultOfCorrectAnswer;
let isGameOver;
let hideOfProgressionNumber;
let stepForProgression;
// Функция приветствия юзера
const greetings = () => {
  userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
};

// Функкция определения имени юзера
const getUsersName = () => userName;

// Функция запуска игры со счетчиком (параметр название игры)
const runGameWithCounter = (nameGame) => {
    greetings();
    rulesOfGame(nameGame);
    const count = 3;
    let i = 0;
    while (i < count && isGameOver !== 'true') {
      question(nameGame);
      correctAnswer(nameGame);
      compareOfAnswer(nameGame);
      i += 1;
    }
    if (i === 3 && isGameOver !== 'true') {
      console.log(`${'Congratulations,'} ${getUsersName()}!`);
    }
  };
  export default runGameWithCounter;