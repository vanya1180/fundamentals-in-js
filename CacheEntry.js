const removeDuplicates = (arr) => [...new Set(arr)];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();