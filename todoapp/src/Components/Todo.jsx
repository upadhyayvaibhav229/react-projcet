import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/TodoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos); // Correct selector
  const dispatch = useDispatch();

  console.log('Todos:', todos); // Debugging

  return (
    <>
      <div className='text-yellow-700 mt-5 text-3xl '>Todos</div>
      <ul className="list-none w-full flex justify-center items-center flex-col">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-[500px]"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
