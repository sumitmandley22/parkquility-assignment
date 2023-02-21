import { createSlice } from "@reduxjs/toolkit";

const initialState = { people: [], page: 1 };

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    //setting up the data which is coming in the filtered form from the home page upon searching and if not searched then whole dataset is being displayed

    setPeople(state, action) {
      if (action.payload) {
        state.people = action.payload;
      }
    },

    //handling action to set the current page number
    setPage(state, action) {
      if (action.payload) {
        state.page = action.payload;
      }
    },
  },
});
export const { setPeople, setPage } = peopleSlice.actions; //exporting actions

export default peopleSlice.reducer;
