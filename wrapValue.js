const isEmptyObject = obj => Object.keys(obj).length === 0;
var pattern = {};
var regexp  = new RegExp('{{([^}]+)}}', 'g');