import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./reducers/peopleReducer";

const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});

export default store;
