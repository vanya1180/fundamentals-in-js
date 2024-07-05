const maxNumber = arr => Math.max(...arr);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
var c = new Counter(); c.add(); c.add(); c.add();