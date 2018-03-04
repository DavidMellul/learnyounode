const ls = require('./mim-module');

ls(process.argv[2], process.argv[3], (err,data) => data.forEach(file => console.log(file)));