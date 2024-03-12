const connection = require('./connection');

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