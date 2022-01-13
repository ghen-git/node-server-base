const mysql = require('mysql');
const { readFile } = require('fs').promises;
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spa_garigliano'
});
const query = util.promisify(connection.query).bind(connection);

exports.runQuery = async function (req, res)
{
    const queryName = req.url.split('/').pop();

    switch(queryName)
    {
        // case 'cock':
        //     await query('INSERT INTO specialists(name, surname, email, phone_number, age, description) VALUES("giovanni", "giorgio", "giovanni.giorgio@gmail.com", "+69 420", 69, "A well-known amongus player");');
        //     res.end();
        //     break;
        //     case 'cock2':
        //         res.end(JSON.stringify(await query('SELECT * FROM specialists')));
        //         break;
        //         case 'cock5':
        //             res.end(JSON.stringify(await query('SELECT * FROM treatments')));
        //             break;
        //             case 'cock6':
        //                 res.end(JSON.stringify(await query('SELECT name, treatment_name, day FROM specialists INNER JOIN (treatments INNER JOIN specialiststreatments ON treatments.id = specialiststreatments.treatment_id)ON  specialists.id = specialiststreatments.specialist_id')));
        //                 break;
        // case 'cock3':
        //     let post = await getPost(req);
        //     console.log(`INSERT INTO specialists(name, surname, email, phone_number, age, description) VALUES("${post.name}", "${post.surname}", "${post.email}", "${post.phoneNumber}", ${post.age}, "${post.description}");`);
        //     await query(`INSERT INTO specialists(name, surname, email, phone_number, age, description) VALUES("${post.name}", "${post.surname}", "${post.email}", "${post.phoneNumber}", ${post.age}, "${post.description}");`);
        //     res.end();
        //     break;
        // case 'cock4':
        //     await query('DELETE FROM specialists');
        //     res.end();
        //     break;
    }
}