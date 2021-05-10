const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'user',
    user: 'localhost',
    password: 'Pass@1276',
    database: 'todolist'
});


app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO todos (id, text, completed) VALUES (2, 'gyms', 0);"
    db.query(sqlInsert, (err, result) => {
        res.send(err);
    })
    
});

app.listen(3001, () => {
    console.log("running on port: 3001");
});