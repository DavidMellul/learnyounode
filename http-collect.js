const http = require('http');
const bl = require('bl');

http.get(process.argv[2], response => {
    response.pipe(bl((err, data) => {
        const content = data.toString();
        const len = content.length;
        console.log(len);
        console.log(content);
    }));
});