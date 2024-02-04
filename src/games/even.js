import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

console.log('Welcome to the Brain Even game!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playRound = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    if (!playRound()) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;