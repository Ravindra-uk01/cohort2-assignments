/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

console.log('todo is working fine');
class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo){
      this.todos.push(todo);
    }

    remove(ind){
      if(ind < 0 || ind >= this.todos.length) {
        return;
      }
      this.todos = this.todos.filter((_, index) => index !== ind);
    }

    update(ind, updatedTodo){
      if(ind < 0 || ind >= this.todos.length) {
        return;
      }
      this.todos[ind] = updatedTodo;
    }

    getAll(){
      return this.todos;
    }

    get(ind){
      if(ind < 0 || ind >= this.todos.length) {
       return null;
      }
      return this.todos[ind];
    }

    clear(){
      this.todos = [];
    }
}

module.exports = Todo;
