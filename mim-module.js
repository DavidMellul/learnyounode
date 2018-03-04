const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) return callback(err);
        callback(null, list.filter(x => path.extname(x) == `.${ext}`));
    });
}