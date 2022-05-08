const { exec } = require("child-process-async");
async function prepublish() {
  await exec("npm run build");
  await exec("cpy src/dictionaries dist/dictionaries --flat");
  await exec("cpy tsconfig.json dist/ --flat");
  await exec("cpy node_modules dist/");
  await exec("npm version patch --git-tag-version=false");
  await exec("cpy package.json dist/ --flat");
  await exec("cpy README.md dist/ --flat");
  await exec("cd dist");
  await exec("npm publish");
}
prepublish();
