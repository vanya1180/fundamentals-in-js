const buildOutputPath = path.join(repositoryRootPath, 'out');
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const uniqueArr = (arr) => [...new Set(arr)];