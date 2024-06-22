const fullName = name || 'buddy';
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const channel = getChannel(computedAppVersion);