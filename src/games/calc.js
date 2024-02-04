import readlineSync from 'readline-sync';
import welcome from './index.js';

const generateRandomNumber = () => Math.floor(Math.random() * 100);
const generateRandomOperator = () => ['+', '-', '*'][Math.floor(Math.random() * 3)];
const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return NaN;
  }
};
const playCalc = () => {
   for (let i = 0; i < 3; i++) {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    const operator = generateRandomOperator();
    const question = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${question}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    const correctAnswer = calculate(number1, operator, number2);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${welcome.name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${welcome.name}!`);
};
export default playCalc;