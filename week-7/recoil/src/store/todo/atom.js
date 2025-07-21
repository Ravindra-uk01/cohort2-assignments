import { atom } from "recoil";

export const todoList = atom({
    key: "todoList", // unique ID (with respect to other atoms/selectors)
    default: [
        {
            id: 1,
            text: "Learn Recoil",
            isComplete: false
        },
        {
            id: 2,
            text: "Learn React",
            isComplete: false
        },
        {
            id: 3,
            text: "Learn Mern",
            isComplete: false
        },
], // default value (aka initial value)
})

// for todo family
export const todoIdState = atom({
    key: "todoIdState",
    default: []
})