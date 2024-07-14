const readFileSync = require("fs").readFileSync;
const filenameFromArg = process.argv[2];

const getKeysString = (dependencies) =>
  Object.keys(dependencies || {})
    .reduce((acc, key) => acc + key + ", ", "")
    .slice(0, -2);

const parsePackageJson = (filename) => {
  const data = readFileSync(filename || filenameFromArg, "utf8");
  const packageJson = JSON.parse(data);

  return {
    dependencies: getKeysString(packageJson.dependencies),
    devDependencies: getKeysString(packageJson.devDependencies),
  };
};

console.log(parsePackageJson());