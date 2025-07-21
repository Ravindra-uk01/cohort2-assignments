import { useRecoilState, useRecoilStateLoadable, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoIdState, todoList } from '../src/store/todo/atom';
import { todosFilterState } from '../src/store/todo/selector';
import { todoItemFamily } from '../src/store/todo/atomFamily';
import { todoItemAsync } from '../src/store/todo/selectorFamily';

const Todo = () => {

    // const todos = useRecoilValue(todoList);
    // const setTodos = useSetRecoilState(todoList);
    // const [todos, setTodos ] = useRecoilState(todoList);
    // const {completed, totalCompleted, completePercent} = useRecoilValue(todosFilterState);

    // use of atom family
    // const [todoAtomFamily, setTodoAtomFamily] = useRecoilState(todoItemFamily); // will not work 

    // const todoItem = useRecoilValue(todoItemFamily(2));
    // console.log("🚀 ~ Todo ~ todoItem:", todoItem)

    // use of selector family
        // const todoitem = useRecoilValue(todoItemAsync(1));
        // console.log("🚀 ~ Todo ~ todoitem:", todoitem)

// loadables - basically it return state which can help us in showing loader till state loads.
//    const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
//    if (todo.state === "loading") {
//       return <div>loading</div>
//    }

      const [todoItem, setTodoItem] = useRecoilStateLoadable(todoItemAsync(1))
      if(todoItem.state === 'loading'){
        console.log('loadiing..........')
      }
      else if(todoItem.state === "hasError"){
        console.log('errorr............')
      }
      console.log("🚀 ~ Todo ~ todoItem:", todoItem)
      
    
    // const addTodo = () => {
    //     setTodos([
    //         ...todos,
    //         {
    //             id: todos.length + 1,
    //             text: "abcjd",
    //             isComplete: true
    //         }
    //     ])
    // }

  return (
    <>
        <div>Todo</div>
        {/* <button onClick={addTodo} > Add todo</button> */}
        {/* <button onClick={addTodo} > Add todo</button> */}
    </>
  )
}

export default Todo;