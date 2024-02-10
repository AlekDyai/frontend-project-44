import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const runBasisOfGameAndGameGeneration = (taskDescription, task) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(taskDescription);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const [expression, correctAnswer] = task();

    console.log(`Question: ${expression}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (userResponse === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runBasisOfGameAndGameGeneration;