const buildOutputPath = path.join(repositoryRootPath, 'out');
const intermediateAppPath = path.join(buildOutputPath, 'app');
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);