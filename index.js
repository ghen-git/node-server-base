const http = require('http');
const { readFileSync } = require('fs').promises;
const client = require('./server/client');
const dispatcher = require('./server/dispatcher');
//const queries = require('./server/sql/queries');
const queries = require('./server/mongodb/queries');

// server setup

const server = http.createServer(serverRequestHandler);

async function serverRequestHandler(req, res)
{
    //checks if the request was a client page request
    if(client.isInURLTree(req.url))
    {
        res.writeHead(200, {'Content-Type': client.getContentType(client.getPath(req.url))});
        console.log(client.getContentType(client.getPath(req.url)));
        res.end(await client.loadPage(req.url));
    }
    else
        dispatcher.dispatch(req, res);
}

dispatcher.addListener('/query', async (req, res) =>
{
    queries.runQuery(req, res);
});

server.listen(80);