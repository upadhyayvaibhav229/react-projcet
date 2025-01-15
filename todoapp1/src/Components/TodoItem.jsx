import React, { useState } from "react";

const TodoItem = ({ todos, setTodos }) => {
   

  const deleteTodo = (id) => {
    setTodos((curr) => curr.filter((item) => item.id !== id));
  };

  const updateTodoText = (id, newText) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  const toggleTodoCompletion = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

 

  return (
    <div className="w-full items-center justify-center mt-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-center items-center gap-x-3 mt-5"
        >
          <input
            type="checkbox"
            className={`w-5 h-5`}
            checked={todo.completed}
            onChange={() => toggleTodoCompletion(todo.id) }
          />
          <input
            type="text"
            className={`w-1/2 border border-gray-400 rounded-md p-2 ${todo.completed ? "line-through": " "}`}
            value={todo.text}
            onChange={(e) => updateTodoText(todo.id, e.target.value)}
            readOnly = {todo.completed}
          />
          <button
            className={`border border-gray-400 rounded-md px-3 py-2 bg-red-700 hover:bg-red-800 text-white`}
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
