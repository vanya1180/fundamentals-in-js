const uniqueArr = (arr) => [...new Set(arr)];
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;