const http = require('http');
const { readFileSync } = require('fs').promises;
const client = require('./server/client');

// server setup

const server = http.createServer(serverRequestHandler);

async function serverRequestHandler(req, res)
{
    //checks if the request was a client page request
    if(client.isInURLTree(req.url))
        res.write(await client.loadPage(req.url, res));

    //sends the response (HAS TO BE THE LAST ROW)
    res.end();
}

server.listen(80);