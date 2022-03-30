/*
Creates tables from JSON files using tailwindcss
for graphics and jquery for the interaction with the DOM. Made because
we are always asked to do the same fucking thing over and over im tired
stop it stop it the voices in my head they're telling me to end it for good.

options
-
columnNames ([]), ignoreColumns ([]), mode ("light"), tableClasses (""), 
tbodyClasses (""), rowCallback (""), rowClasses (""), cellClasses (""), 
headerClasses (""), headerCellsClasses ("")
*/

function create(json, options)
{
    //options setup
    const columnNames = options.columnNames != undefined ? options.columnNames : [];

    const ignoreColumns = options.ignoreColumns != undefined ? options.ignoreColumns : [];

    const mode = options.mode != undefined ? options.mode : 'light';

    const tableClasses = options.tableClasses != undefined ? 
    options.tableClasses :
        mode == 'light' ? 'm-6 bg-white shadow-xl' : 
        mode == 'dark' ? 'm-6 bg-white shadow-xl' : 
    '';

    const tbodyClasses = options.tbodyClasses != undefined ? 
    options.tbodyClasses :
        mode == 'light' ? '' : 
        mode == 'dark' ? 'bg-gray-800' : 
    '';

    const rowClasses = options.rowClasses != undefined ? 
    options.rowClasses : '';

    const cellClasses = options.cellClasses != undefined ? 
    options.cellClasses :
        mode == 'light' ? 'p-3 px-5' : 
        mode == 'dark' ? 'p-3 px-5 text-white' : 
    '';
    
    const headerClasses = options.headerClasses != undefined ? 
    options.headerClasses :
        mode == 'light' ? 'bg-blue-100 border-b-2 border-b-blue-200' : 
        mode == 'dark' ? 'bg-red-300 border-b-2 border-b-red-400' : 
    '';
    
    const headerCellsClasses = options.headerCellsClasses != undefined ? 
    options.headerCellsClasses : 'p-3 px-5';

    const rowCallback = options.rowCallback;
    
    if(json.length == 0)
        throw 'Invalid JSON, it must have at least one line';

    //gets the cols of the json, filtering out any included in
    //ignoreColumns
    const keys = ignoreColumns.length > 0 ? Object.keys(json[0]).filter(col => !ignoreColumns.includes(col)) : Object.keys(json[0]);

    const table = $(`<table class="${tableClasses}">`);

    const thead = $(`<thead class="${headerClasses}">`);
    
    if(columnNames.length > 0)
        for(const column of columnNames)
            thead.append($(`
            <th class="${headerCellsClasses}">${column}</th>
            `));
    else
        for(const column of keys)
            thead.append($(`
            <th class="${headerCellsClasses}">${column.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}</th>
            `));

    table.append(thead);

    const tbody = $(`<tbody class="${tbodyClasses}">`);

    for(let i = 0; i < json.length; i++)
    {
        const row = json[i];
        const tr = $(`<tr class="${rowClasses}" onclick="${rowCallback != undefined ? rowCallback(i, row).replace(/"/gi, '\'') : ''}">`);
        
        for(const col of keys)
            $(`
            <td class="${cellClasses}">${row[col]}</td>
            `).appendTo(tr);

        tbody.append(tr);
    }

    table.append(tbody);

    return table;
}

export default { create };