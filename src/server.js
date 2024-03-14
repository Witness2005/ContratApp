require('./DataBase/sync.js');

const connection = require('./DataBase/connection.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
//routers
const userrouter = require('./Routers/userrouter.js');
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.listen(port, ()=> {
    console.log("The application is running on port: " + port);
})

app.use('/api', userrouter);