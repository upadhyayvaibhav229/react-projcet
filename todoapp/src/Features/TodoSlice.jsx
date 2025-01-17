import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Create React App", edit: false , completed: false}],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
        edit: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    editTodo: (state, action) => {
    
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.edit = !todo.edit;
        }else{
          return  
        }
      });
    },

    updateTodo: (state, action) => {
      console.log("this is action in slicer from update", action);
      state.todos.map((todo) => {
        if (todo.id === action.payload.id && action.payload.text) {
          todo.edit = !todo.edit;
          todo.text = action.payload.text;
        }else{
          return
        }
        console.log(todo,"inside slicer");
        
      });
    },

    toggleCompleted: ((state, action)=>{
     state.todos.map((todo)=>{
       if(todo.id === action.payload.id){
         todo.completed = !todo.completed
       }
     })
    }),
    
  },



});

export const { addTodo, removeTodo, editTodo, toggleCompleted,updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
