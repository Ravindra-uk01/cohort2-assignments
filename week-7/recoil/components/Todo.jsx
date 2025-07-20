import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoList } from '../src/store/todo/atom';
import { todosFilterState } from '../src/store/todo/selector';

const Todo = () => {

    // const todos = useRecoilValue(todoList);
    // const setTodos = useSetRecoilState(todoList);
    const [todos, setTodos ] = useRecoilState(todoList);
    const {completed, totalCompleted, completePercent} = useRecoilValue(todosFilterState);
    console.log("🚀 ~ Todo ~ completed, totalCompleted, completePercent:", completed, totalCompleted, completePercent)

    const addTodo = () => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                text: "abcjd",
                isComplete: true
            }
        ])
    }

    console.log('todos ', todos)
    
  return (
    <>
        <div>Todo</div>
        <button onClick={addTodo} > Add todo</button>
    </>
  )
}

export default Todo;