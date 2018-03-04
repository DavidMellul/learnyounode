const fs = require('fs');
const path = require('path');

const ext = '.' + (process.argv[3])

fs.readdir(process.argv[2], (err, list) => {
    list.filter(x => path.extname(x) == ext ).forEach(x => console.log(x));
});