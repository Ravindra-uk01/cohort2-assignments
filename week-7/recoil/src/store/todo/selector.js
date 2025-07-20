import { selector } from "recoil";
import { todoList } from "./atom";

// selector is global state which is derived from existing state with some filters or manipulation
export const todosFilterState = selector({
    key: "todosFilterState",
    get: ({get}) => {
        const todos = get(todoList);
        const completed = todos.filter((todo) => todo.isComplete === true);
        const totalCompleted = completed.length;
        const completePercent =( completed.length/ todos.length )* 100;

        return {
            completed,
            totalCompleted,
            completePercent
        }
    }
})