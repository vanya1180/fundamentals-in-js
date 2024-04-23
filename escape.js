const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
console.log(1 +  "2" + "2");
var arr1 = "john".split('');
const executableName = getExecutableName(channel, appName);