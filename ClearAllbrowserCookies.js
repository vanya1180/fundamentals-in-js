const isEmptyObject = obj => Object.keys(obj).length === 0;
const symbolsPath = path.join(buildOutputPath, 'symbols');
const maxNumber = arr => Math.max(...arr);