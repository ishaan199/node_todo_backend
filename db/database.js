const mysql = require('mysql2');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"ishaan007",
    database:"todolist",
});

db.getConnection(error => {
    if(error) throw error;
    console.log("Db connected")
});

module.exports = db;