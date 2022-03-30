async function sendReq(reqName, param)
{
    if(param == undefined)
        return new Promise(resolve =>
            {
                let ajaxRequest = $.ajax({url: `${reqName}`, type: "POST", timeout: "4000"});
            
                ajaxRequest.fail(() => console.error("Holy shmokes."));
                ajaxRequest.done((data) =>{ resolve(data); });
            });
    else
        return new Promise(resolve =>
            {
                let ajaxRequest = $.ajax({url: `${reqName}`, type: "POST", timeout: "4000", data: param});
            
                ajaxRequest.fail(() => console.error("Holy shmokes."));
                ajaxRequest.done((data) =>{ resolve(data); });
            });
}

async function executeQuery(queryName, param)
{
    if(param == undefined)
        return new Promise(resolve =>
            {
                let ajaxRequest = $.ajax({url: `query/${queryName}`, type: "POST", timeout: "4000"});
            
                ajaxRequest.fail(() => console.error("Holy shmokes."));
                ajaxRequest.done((data) =>{ resolve(data); });
            });
    else
        return new Promise(resolve =>
            {
                let ajaxRequest = $.ajax({url: `query/${queryName}`, type: "POST", timeout: "4000", data: param});
            
                ajaxRequest.fail(() => console.error("Holy shmokes."));
                ajaxRequest.done((data) =>{ resolve(data); });
            });
}

export default { sendReq, executeQuery };