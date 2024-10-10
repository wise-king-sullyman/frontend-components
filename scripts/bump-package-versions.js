const fs = require('fs');
const glob = require('glob');
const path = require('path');

const root = process.cwd();

function getFileContent(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

const packageFiles = glob.sync(path.join(root, 'packages', '*/package.json'));
const ausulivPackages = packageFiles.filter((file) => {
  const fileContent = getFileContent(file);
  return fileContent.name.startsWith('@ausuliv');
});

ausulivPackages.forEach((packageFile) => {
  const fileContent = getFileContent(packageFile);
  const { version } = fileContent;
  const [major, minor, patch] = version.split('.');
  const newVersion = `${major}.${minor}.${parseInt(patch) + 1}`;
  fileContent.version = newVersion;
  fs.writeFileSync(packageFile, JSON.stringify(fileContent, null, 2));
});
