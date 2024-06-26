const merge = [...new Set(a.concat(b))];
const intermediateAppPath = path.join(buildOutputPath, 'app');
const repositoryRootPath = path.resolve(__dirname, '..');