const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parts = url.parse(req.url, true);
    const endpoint = parts['pathname'];
    let body = {};

    const date = new Date(parts['query']['iso']);

    if (endpoint == '/api/parsetime') {
        body = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        };
    } else {
        body = {
            'unixtime': date.getTime()
        };
    }
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(body));
});

server.listen(process.argv[2]);