import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
};

const filmsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    playFilm(state, action) {
      state.id = action.payload;
    },
  },
});

export const { playFilm } = filmsSlice.actions;

export default filmsSlice.reducer;
