import runBasisOfGameAndGameGeneration from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const MIN_NUMBER = 1;
const FIRST_MAX_NUMBER = 25;
const SECOND_MAX_NUMBER = 10;

const calculator = (firstNumber, secondNumber, operation) => {
  let result;
  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else {
    result = firstNumber * secondNumber;
  }
  return result;
};

const calculateValueOfExpression = () => {
  const taskDescription = 'What is the result of the expression?';

  const calcTask = () => {
    const firstNumber = getRandomNumber(MIN_NUMBER, FIRST_MAX_NUMBER);
    const secondNumber = getRandomNumber(MIN_NUMBER, SECOND_MAX_NUMBER);

    const operations = ['+', '-', '*'];
    const operationSelection = getRandomIndex(operations);
    const operation = operations[operationSelection];

    const question = `${firstNumber} ${operation} ${secondNumber}`;

    const result = String(calculator(firstNumber, secondNumber, operation));
    return [question, result];
  };

  runBasisOfGameAndGameGeneration(taskDescription, calcTask);
};

export default calculateValueOfExpression;
