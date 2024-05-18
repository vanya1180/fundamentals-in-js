const merge = [...new Set(a.concat(b))];
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const resultingPromises = urls.map((url) => makHttpRequest(url));