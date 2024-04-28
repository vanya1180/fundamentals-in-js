const repositoryRootPath = path.resolve(__dirname, '..');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const shuffledArray = array.sort(() => Math.random() - 0.5); 