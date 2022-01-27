const { MongoClient } = require('mongodb');

const CONNECTIONSTRING = 'mongodb://127.0.0.1:27017';
const CONNECTIONOPTIONS = { useNewUrlParser: true };

var client;
setup();

async function setup()
{
    client = await MongoClient.connect(CONNECTIONSTRING, CONNECTIONOPTIONS);
}

exports.runQuery = async function (req, res)
{
    const queryName = req.url.split('/').pop();

    switch(queryName)
    {
        // case 'example':
        //     const allPlayers = await (await client.db('5d_basket').collection('players').find({})).toArray();
        //     console.table(allPlayers);
    }
}