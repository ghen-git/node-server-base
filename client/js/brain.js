
window.onload = function()
{
    loadScripts();
}

//#region Setup Scripts

const scripts = 
[
    {scope: "general", src: "js/sqlInterface.js"},
    {scope: "home", src: "js/home.js"}
]

function loadScripts()
{
    for (const script of scripts) 
    {
        if(script.scope == "general")
        {
            var htmlScript = document.createElement('script');
            htmlScript.src = script.src;

            $("head")[0].appendChild(htmlScript);
        }
        if(script.scope == $("body").attr("name"))
        {
            var htmlScript = document.createElement('script');
            htmlScript.src = script.src;

            $("head")[0].appendChild(htmlScript);
        }
    }
}
//#endregion