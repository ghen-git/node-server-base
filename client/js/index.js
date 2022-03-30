import serverVerbs from './modules/server-verbs.js';
import JSONTable from './modules/JSON-table.js';

//sql interface example
serverVerbs.executeQuery('example');

//JSON table example
const json = 
[
    {_id: 1, name: 'Emily', surname: 'Parker', age: '25', last_met: '20yrs'},
    {_id: 2, name: 'Toby', surname: 'McGuyre', age: '13', last_met: '1hr'},
    {_id: 3, name: 'Thomas', surname: 'Elliot', age: '15', last_met: '3ds'},
    {_id: 4, name: 'James', surname: 'Paul', age: '26', last_met: '5hrs'},
    {_id: 5, name: 'Elliot', surname: 'Rafey', age: '70', last_met: '3yrs'}
];

const table = JSONTable.create(json, 
    {
        columnNames: ['Name', 'Surname', 'Age', 'Last Met'],
        ignoreColumns: ['_id'],
        mode: 'dark',
        headerClasses: 'bg-orange-300 border-b-2 border-b-orange-400',
        rowCallback: (i, row) => `console.log('line n.${i + 1}'); console.table([${JSON.stringify(row)}]); `
    });
$('body').append(table);