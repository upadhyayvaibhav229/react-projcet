import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  edit: false,  // If these global flags are needed, otherwise consider removing
  delete: false,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    delCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
    editCard: (state, action) => {
      state.cards.forEach((card) => {
        if (card.id === action.payload.id) {
          // Toggle the edit flag, or update properties as needed
          card.edit = !card.edit;

        }
      });
    },
  },
});

export const { addCard, delCard, editCard } = cardSlice.actions;
export default cardSlice.reducer;
