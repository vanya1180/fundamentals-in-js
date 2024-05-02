const merge = (a, b) => [...a, ...b];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());