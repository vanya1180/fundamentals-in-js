const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
var c = new Counter(); c.add(); c.add(); c.add();