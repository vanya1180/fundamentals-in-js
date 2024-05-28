const executableName = getExecutableName(channel, appName);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const timeFromDate = date => date.toTimeString().slice(0, 8);