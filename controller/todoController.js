const db = require('../db/database');


//Create Database
exports.createDb = (req,res) => {
    let q = `CREATE DATABASE todolist`;
    db.query(q,(err,result)=>{
        if(err) throw err;
        return res.status(201).json('Db Created')
    })
};

//Create Table
exports.createTable = (req,res) => {
    let q = `CREATE TABLE todos(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), PRIMARY KEY(id))`;
    db.query(q,(err,result)=>{
        if(err) throw err;
        return res.status(201).json('Table Created');
    })
};


//Create List 
exports.createList = (req,res) => {
    let q = `INSERT INTO todos SET ?`
    let {firstName, lastName} = req.body;

    db.query(q,{firstName, lastName},(err,result)=>{
        if(err) throw err;
        return res.status(201).json(result);
    })
};

//Show All todos 
exports.getAll = (req,res) => {
    let q = `SELECT * FROM todos`;
    db.query(q,(err,result)=>{
        if(err) throw err;
        res.status(201).json(result)
    })
};

//Show Single todo
exports.singleTodo = (req,res) => {
    let q = `SELECT * FROM todos WHERE id = ${req.params.id}`;
    db.query(q,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    });
};

//Update Todo
exports.updateTodo = (req,res) => {
    let { firstName, lastName } = req.body;
    let q = `UPDATE todos SET ? WHERE id=${req.params.id}`;
    db.query(q,{firstName,lastName},(err,result)=>{
        res.status(201).json(result)
    })
}

//Delete Todos
exports.deleteTodo = (req,res) => {
    let q = `DELETE FROM todos WHERE id=${req.params.id}`;
    db.query(q,(err,result)=>{
        if(err) throw err;
        res.status(201).json("Deleted successfully!")
    })
};
