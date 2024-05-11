const buildOutputPath = path.join(repositoryRootPath, 'out');
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();