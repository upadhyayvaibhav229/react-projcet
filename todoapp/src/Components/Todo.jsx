import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../Features/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos); // Correct selector
  const dispatch = useDispatch();
  const editInput=useRef("");


  const handleUpdate=(index)=>{
    const updatedText=editInput.current.value;
    
    dispatch(editTodo({id:index,text:updatedText}));
   

  }
 
  // const handleEdit = (id, index) => {
  //   dispatch(editTodo({ id: todos.id }));
  //   console.log("edit func", todos[index].edit, id);

  // };
  console.log('Todos:', todos);


  return (
    <>
      <div className="text-yellow-700 mt-5 text-3xl ">Todos</div>
      <ul className="list-none w-full flex justify-center items-center flex-col">
        {todos.map((todo, index) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-[500px]"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="space-x-3">
              <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                X
              </button>
              {todo.edit ? (
                <>
                  <div className="editInput">
                    <input
                      type="text"
                      className="text-black"
                      value={editInput.current.value}
                     ref={editInput}
                    />
                    <button onClick={()=>handleUpdate(todo.id)} className={`text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md`}>update</button>
                  </div>
                </>
              ) : (
                <button
                onClick={() => dispatch(editTodo({ id: todo.id }))}
                  className={`text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md`}
                >
                  edit
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
