async function executeQuery(queryName)
{
    return new Promise(resolve =>
        {
            let ajaxRequest = $.ajax({url: `query/${queryName}`, type: "POST", timeout: "4000"});
        
            ajaxRequest.fail(() => this.console.error("Holy shmokes."));
            ajaxRequest.done((data) =>{ resolve(data); });
        });
}

async function executeParamQuery(queryName, param)
{
    return new Promise(resolve =>
        {
            let ajaxRequest = $.ajax({url: `query/${queryName}`, type: "POST", timeout: "4000", data: param});
        
            ajaxRequest.fail(() => this.console.error("Holy shmokes."));
            ajaxRequest.done((data) =>{ resolve(data); });
        });
}

export default { executeQuery, executeParamQuery };