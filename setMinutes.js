const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const flattenedArray = arr => [].concat(...arr);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');