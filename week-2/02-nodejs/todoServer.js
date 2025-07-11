/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");
const crypto = require("crypto");

const app = express();

app.use(bodyParser.json());

// let todos = [];
// let nextId = 1;

// Hard todo - working on it
const todosFilePath = path.join(__dirname, "todos.json");

app.get("/todos", async (req, res) => {
  const data = await fs.readFile(todosFilePath, 'utf-8');
  const allTodos = JSON.parse(data);
  res.status(200).json(allTodos);
});

app.post("/todos", async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  // const newTodo = {
  //     id: nextId++,
  //     title,
  //     description,
  //     completed: false
  // };

  // todos.push(newTodo);

  // for saving in-memory data to file

  const newTodo = {
    id: crypto.randomBytes(4).toString("hex"), // Generate a random ID
    title,
    description,
    completed: false,
  };

  const todos = JSON.parse(await fs.readFile(todosFilePath, "utf-8"));
  todos.push(newTodo);

  await fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
    if (err) {
      console.error("Error writing todos to file:", err);
    }
  });

  res.status(201).json({ id: newTodo.id });
});

app.get("/todos/:id", async (req, res) => {
  const todoId = req.params.id;
  const todos = JSON.parse(await fs.readFile(todosFilePath, "utf-8"));
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  return res.status(200).json(todo);
});

app.put("/todos/:id", async (req, res) => {
  const todoId = req.params.id;
  const todos = JSON.parse(await fs.readFile(todosFilePath, "utf-8"));
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  const { title, description, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  res.status(200).json(todo);
});

app.delete("/todos/:id", async (req, res) => {
  const todoId = req.params.id;

  const todos = JSON.parse(await fs.readFile(todosFilePath, "utf-8"));
  const todoIndex = todos.findIndex((t) => t.id === todoId);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(todoIndex, 1);
  await fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
    if (err) {
      console.error("Error writing todos to file:", err);
    }
  });
  res.status(200).json({ message: "Todo deleted successfully" });
});

module.exports = app;
