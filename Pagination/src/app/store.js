import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from '../Features/PaginationSlice.jsx'

export const store = configureStore({
    reducer: {
        Pagination: paginationReducer
    }
})