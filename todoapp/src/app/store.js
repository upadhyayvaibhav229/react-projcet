import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/TodoSlice.jsx'

export const store = configureStore({
    reducer: todoReducer
})