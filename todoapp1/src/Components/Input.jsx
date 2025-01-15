import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Input = () => {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setnewTodo] = useState(""); 

  const addTodo = () => {
    if (newTodo.trim() === "") return; 
    setTodos((prevTodo) => [
        { id: Date.now(), text: newTodo, completed: false },
        ...prevTodo,
    ]);
    setnewTodo(""); 
  };

  return (
    <>
      <div className="input w-full h-screen">
        <div className="flex flex-col justify-center items-center gap-x-3 mt-5 w-full">
          <div>
            <input
              type="text"
              placeholder="Add Todo"
              className="w-[500px] border border-gray-400 rounded-md p-2"
              value={newTodo} // Bind input to state
              onChange={(e) => setnewTodo(e.target.value)} // Update input state
            />
            <button
              className="border border-gray-400 rounded-md px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white"
              onClick={addTodo}
            >
              Add
            </button>
          </div>

          {/* Pass todos and setTodos as props to TodoItem */}
          <TodoItem todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
};

export default Input;

