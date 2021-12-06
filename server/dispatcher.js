var listeners = {};

exports.addListener = function(name, callback)
{
    listeners[name] = callback;
}

exports.dispatch = function(req, res)
{
    //trims the url to the last iteration of /
    const url = req.url.substring(0, req.url.lastIndexOf('/')).length > 0 ? req.url.substring(0, req.url.lastIndexOf('/')) : req.url.substring(req.url.lastIndexOf('/'), req.length);

    //runs the listener
    if(listeners[url] != undefined)
        listeners[url](req, res);
}