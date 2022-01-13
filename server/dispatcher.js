var listeners = {};

exports.addListener = function(name, callback)
{
    listeners[name] = callback;
}

exports.dispatch = async function(req, res)
{
    //trims the url to the last iteration of /
    const url = req.url.substring(0, req.url.lastIndexOf('/')).length > 0 ? req.url.substring(0, req.url.lastIndexOf('/')) : req.url.substring(req.url.lastIndexOf('/'), req.length);

    if(req.method == 'POST')
        req.post = await getPost(req);

    //runs the listener
    if(listeners[url] != undefined)
        listeners[url](req, res);
}

async function getPost(req)
{
    return new Promise(resolve =>
        {   
            var body = '';
            req.on('data', (chunk) =>
            {
                body += chunk;
            });
            req.on('end', () => 
            {
                let bodyJSON = {};
                for(let field of body.split('&'))
                    bodyJSON[field.split('=')[0]] = field.split('=')[1];
                resolve(bodyJSON);
            });
        });
}