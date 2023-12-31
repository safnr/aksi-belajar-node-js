const dbPool = require('../config/database')
// const todos = [] // database sementara

//create todos
const createTodos =  async (body) => {
    const query = `INSERT INTO todos (userId, title, description, deadline)
    VALUES ('${body.userId}', '${body.title}', '${body.description}', '${body.deadline}')`   
   
    return dbPool.execute(query); 
}

//update todos
const updateTodos = async (id, body) => {
    const query = `UPDATE todos SET title = '${body.title}', description = '${body.description}', deadline = '${body.deadline}' WHERE id = ${id}`

    return dbPool.execute(query);
}

//view todos 
const viewTodo = async (id) => {
    const query = `SELECT id, userId, title, description, deadline FROM todos WHERE id = ${id}`
  
    return dbPool.execute(query);
}

//view all todos 
const viewTodos = async (userId) => {
    const query = `SELECT id, userId, title, description, deadline FROM todos WHERE userId = ${userId}`
   
    return dbPool.execute(query);
}

//delete todos
const deleteTodos = async (id) => {
    const query = `DELETE FROM todos WHERE id = ${id}`
  
    return dbPool.execute(query);
}

const getUserByUserId = async (userId) => {
    const query = `SELECT id, userId, title, description, deadline FROM todos WHERE userId = '${userId}'`
   
    return dbPool.execute(query)
}

module.exports = { createTodos, updateTodos, viewTodo, viewTodos, deleteTodos, getUserByUserId }