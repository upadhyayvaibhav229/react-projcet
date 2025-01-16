import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo, toggleCompleted } from "../Features/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const editRefs = useRef({});

  const handleEditClick = (id) => {
    dispatch(editTodo({ id }));
  };

  const handleUpdate = (id) => {
    const inputElement = editRefs.current[id];
    const updatedText = inputElement?.value.trim();
    if (updatedText) {
      dispatch(editTodo({ id, text: updatedText }));
    } else {
      alert("Todo text cannot be empty.");
    }
  };

  const handleComplete = (id) => {
    dispatch(toggleCompleted({ id }));
  };

  return (
    <>
      <div className="text-yellow-700 mt-5 text-3xl">Todos</div>
      <ul className="list-none w-full flex justify-center items-center flex-col">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-[500px]"
            key={todo.id}
          >
            {todo.edit ? (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  defaultValue={todo.text}
                  ref={(el) => (editRefs.current[todo.id] = el)}
                  className="text-black px-2 py-1 rounded"
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Update
                </button>
                <button
                  onClick={() => handleEditClick(todo.id)}
                  className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={todo.completed}
                    onChange={() => handleComplete(todo.id)}
                  />
                  <div
                    className={`text-white ${
                      todo.completed ? "line-through opacity-50" : ""
                    }`}
                  >
                    {todo.text}
                  </div>
                </div>
                <div className="space-x-3">
                  <button
                    onClick={() => dispatch(removeTodo({ id: todo.id }))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    X
                  </button>
                  {!todo.completed && (
                    <button
                      onClick={() => handleEditClick(todo.id)}
                      className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

