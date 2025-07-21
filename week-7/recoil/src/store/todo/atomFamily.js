import { atomFamily } from "recoil";
import { TODOS } from "../../todos";

// atomFamily in Recoil is a utility for creating a collection of atoms that share the same structure
//  but are parameterized by a key (like an ID).

// why to use atomFamily or atom
// If you use a single atom to manage a list (e.g., an array of todos), 
// updating one item often triggers re-renders in all components using that atom.
// With atomFamily, each dynamic item (e.g. each todo) has its own atom. Updating one will only re-render 
// the component that uses that particular atom—leading to more efficient, scalable state management, 
// especially in large or dynamic lists 


export const todoItemFamily = atomFamily({
    key: "todoItemFamily",
    default : id => {
       return TODOS.filter((todo) => todo.id === id);
    }
})