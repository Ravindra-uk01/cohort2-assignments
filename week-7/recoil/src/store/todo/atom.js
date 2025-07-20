import { atom } from "recoil";


export const todoList = atom({
    key: "todoList", // unique ID (with respect to other atoms/selectors)
    default: [{
        id: 1,
        text: "Learn Recoil",
        isComplete: false
    }], // default value (aka initial value)
})