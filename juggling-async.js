const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
let responses = [];

urls.forEach((url, index) => {
    http.get(url, res => {
        res.pipe(bl((err, data) => {
            responses[index] = data.toString();
            if (responses.length == urls.length)
                for (let i = 0; i < responses.length; i++)
                    console.log(responses[i]);
        }));
    });
})