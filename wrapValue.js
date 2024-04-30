const randomString = () => Math.random().toString(36).slice(2);
const getRandomBoolean = () => Math.random() >= 0.5;
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);