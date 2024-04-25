const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
[foo, bar] = [bar, foo];
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');