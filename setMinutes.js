const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomBoolean = () => Math.random() >= 0.5;
const randomString = () => Math.random().toString(36).slice(2);