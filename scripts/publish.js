const { exec } = require('child-process-async');

exec("npm run build")
exec("cpy src/dictionaries dist/dictionaries --flat")
exec("npm version patch")
exec("cpy package.json dist/ --flat")
exec("cpy tsconfig.json dist/ --flat")
exec("cpy node_modules dist/")
exec("cd dist")
exec("npm publish")
