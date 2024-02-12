const getRandomNumber = (MIN_NUMBER, MAX_NUMBER) => {
  const randomNumber = Math.ceil(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
  return randomNumber;
};

const getRandomIndex = (data) => {
  const index = Math.floor(Math.random() * data.length);
  return index;
};

export { getRandomNumber, getRandomIndex };
