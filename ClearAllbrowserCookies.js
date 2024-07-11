const added = [0, 1, 2, 3, 4].map((item) => item + 1);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);