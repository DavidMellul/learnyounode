const net = require('net');

let padfill = (value) => value > 9 ? value : `0${value}`;
let now = function() { 
            const date = new Date();
            return date.getFullYear()          + '-' +
                    padfill(date.getMonth()+1) + '-' +
                    padfill(date.getDate())    + ' ' +
                    padfill(date.getHours())   + ':' +
                    padfill(date.getMinutes());
          };

const server = net.createServer(connection => {
    const date = new Date();
    connection.end(`${now()}\n`);
});

server.listen(process.argv[2]);