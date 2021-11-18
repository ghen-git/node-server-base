const {readdir, readFile} = require('fs').promises;

//holds all the client's files
var URLTree = [];

//populates the url tree
initURLTree();

async function initURLTree()
{
    //reads the url config
    const urlConfigGetter = await readFile(__dirname + '/../config/url-config.json');
    const urlConfig = JSON.parse(urlConfigGetter);

    URLTree = urlConfig.pages;

    //recursevly adds urls from the files in the client folder
    const files = await readdir(__dirname + '/../client/');
    await populateTree('', files);

    //logs the url tree
    console.table(URLTree);
}

//recursively loads the URL Tree 
async function populateTree(parentFolder, files)
{
    for (const file of files)
    {
        if(isFolder(file))
        {
            const childFiles = await readdir(__dirname + '/../client/' + `${parentFolder}/${file}`);
            //repeats the function with the folder as the parentFolder parameter
            populateTree(`${parentFolder}/${file}`, childFiles);
        }
        else
            URLTree.push({url: `${parentFolder}/${file}`, path: `${parentFolder}/${file}`});
    }
}

function isFolder(path)
{
    //checks if path doesn't have dots or if the text after the last dot is
    //longer than 4 chars
    return path.split('.').length == 1 || !(path.split('.').pop().length <= 4);
}

function getContentType(path)
{
    const extension = path.split('.').pop();

    if(extension == 'html')
        return 'text/html';
    if(extension == 'css')
        return 'text/html';
    if(extension == 'js')
        return 'text/javascript';
    if(extension === 'ico')
        return 'image/vnd.microsoft.icon';

    return '';
}

exports.URLTree = URLTree;

//checks if a given url is contained in the URL tree;
function isInURLTree(url)
{
    return URLTree.filter(item => item.url.includes(url)).length > 0;
}

exports.isInURLTree = isInURLTree;

//gets the file correspoding to the url
exports.loadPage = async function(url, res)
{
    if(isInURLTree(url))
    {
        const path = URLTree.filter(item => item.url.includes(url))[0].path;

        res.writeHead(200, {'Content-Type': getContentType(path)});
        console.log(`requested file: ${path} `);
//
        return new Buffer(await readFile(`${__dirname}/../client${path}`));
    }
}