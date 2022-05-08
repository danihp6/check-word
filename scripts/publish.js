const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const packagePath = path.join(__dirname, '../package.json');

exec("npm run build")
exec("cpy src/dictionaries dist/dictionaries --flat")
exec("cpy package.json dist/ --flat")
exec("cpy tsconfig.json dist/ --flat")
exec("cpy node_modules dist/")
exec("cd dist")
const file = fs.readFileSync(packagePath).toString();
const package = JSON.parse(file);
console.log(+package.version + 0,01)
