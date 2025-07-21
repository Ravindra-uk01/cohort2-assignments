import { selectorFamily } from "recoil";
import axios from 'axios'


// selector family has access to get functin using this we can find todo by id of atom or atomFamily 
// with filteration , or advanced tectics.

// Note: we can also use async functions inside selectorFamily but can't use inside the atomFamily
export const todoItemAsync = selectorFamily({
    key: "todoItemAsync",
    get: (id) => async() => {
        return await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
    }
})