const currentDate = () => new Date().toLocaleDateString('en-US');
const isArray = (arr) => Array.isArray(arr);
const randomString = () => Math.random().toString(36).slice(2);