const express = require('express');
const router = express.Router();

const {createDb, createTable, createList, getAll, singleTodo, updateTodo, deleteTodo} = require('../controller/todoController');

router.get('/create/database', createDb);
router.get('/create/table', createTable);
router.post('/create/list', createList);
router.get('/show/todos', getAll);
router.get('/single/todo/:id',singleTodo);
router.put('/update/todo/:id',updateTodo);
router.delete('/delete/todo/:id',deleteTodo);
module.exports = router;