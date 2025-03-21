import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../Featuers/CardSlice';

export const store = configureStore({
    reducer: {
        cards: cardReducer
    }
})