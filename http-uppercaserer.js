const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
    if (req.method == 'POST')
        req.pipe(map(x => x.toString().toUpperCase())).pipe(res);
});

server.listen(process.argv[2]);