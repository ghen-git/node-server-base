/*
Creates tables from JSON files using tailwindcss
for graphics and jquery for the interaction with the DOM. Made because
we are always asked to do the same fucking thing over and over im tired
stop it stop it the voices in my head they're telling me to end it for good.
*/

//light mode
function create(json, columnNames = [], ignoreColumns = [])
{
    if(json.length == 0)
        throw 'Invalid JSON, it must have at least one line';

    //gets the cols of the json, filtering out any included in
    //ignoreColumns
    const keys = ignoreColumns.length > 0 ? Object.keys(json[0]).filter(col => !ignoreColumns.includes(col)) : Object.keys(json[0]);

    const table = $('<table class="m-6 bg-white shadow-xl">');

    const thead = $('<thead class="bg-blue-100 border-b-2 border-b-blue-200">');
    
    if(columnNames.length > 0)
        for(const column of columnNames)
            thead.append($(`
            <th class="p-3 px-5">${column}</th>
            `));
    else
        for(const column of keys)
            thead.append($(`
            <th>${column.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}</th>
            `));

    table.append(thead);

    const tbody = $('<tbody>');

    for(const row of json)
    {
        const tr = $('<tr>');
        
        for(const col of keys)
            $(`
            <td class="p-3 px-5">${row[col]}</td>
            `).appendTo(tr);

        tbody.append(tr);
    }

    table.append(tbody);

    return table;
}

//dark mode
function createDark(json, columnNames = [], ignoreColumns = [])
{
    if(json.length == 0)
        throw 'Invalid JSON, it must have at least one line';

    //gets the cols of the json, filtering out any included in
    //ignoreColumns
    const keys = ignoreColumns.length > 0 ? Object.keys(json[0]).filter(col => !ignoreColumns.includes(col)) : Object.keys(json[0]);

    const table = $('<table class="m-6 bg-white shadow-xl">');

    const thead = $('<thead class="bg-red-300 border-b-2 border-b-red-400">');
    
    if(columnNames.length > 0)
        for(const column of columnNames)
            thead.append($(`
            <th class="p-3 px-5">${column}</th>
            `));
    else
        for(const column of keys)
            thead.append($(`
            <th>${column.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}}</th>
            `));

    table.append(thead);

    const tbody = $('<tbody class="bg-gray-800">');

    for(const row of json)
    {
        const tr = $('<tr>');
        
        for(const col of keys)
            $(`
            <td class="p-3 px-5 text-white">${row[col]}</td>
            `).appendTo(tr);

        tbody.append(tr);
    }

    table.append(tbody);

    return table;
}

export default { create, createDark };