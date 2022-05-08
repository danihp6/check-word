const { exec } = require("child-process-async");
async function prepublish() {
  await exec("npm run build");
  await exec("cpy src/dictionaries dist/dictionaries --flat");
  await exec("cpy tsconfig.json dist/ --flat");
  await exec("cpy node_modules dist/");
  await exec("npm version patch --git-tag-version=false");
  await exec("cpy package.json dist/ --flat");
  await exec("cpy README.md dist/ --flat");
  const version = JSON.parse((await exec("npm version --json=true")).stdout)["word-checker"];
  console.log(`Uploading version ${version}`)
  await exec("cd dist | npm publish");
}
prepublish();
