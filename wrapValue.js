const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());