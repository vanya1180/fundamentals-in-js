const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const value = ( 5 < 7 ) ? "True" : "False" ;