import runBasisOfGameAndGameGeneration from '../index.js';
import { getRandomNumber } from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 101;

const isPrime = (number) => {
  if (number === 1) {
    return false;
  } if (number === 2) {
    return true;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const recognizePrimeNumber = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeTask = () => {
    const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

    const question = `Question: ${number}`;

    const result = isPrime(number) ? 'yes' : 'no';
    return [question, result];
  };

  runBasisOfGameAndGameGeneration(taskDescription, primeTask);
};

export default recognizePrimeNumber;