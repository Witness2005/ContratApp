const connection = require('./connection');

const user = require('../Models/user');
const worker = require('../Models/worker');


async function sync(){
    await connection.sync({force: false})
        .then(() => { 
            console.log('Synchronized DataBase');
        })
        .catch((error) => { 
            console.error('Error syncing DataBase' + error);
        }); 


    }
sync();