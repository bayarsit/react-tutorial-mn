import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

export default configureStore({
  // add every slices you created, add reducer here:
  reducer: { counter: counterReducer },
  //  for example: user reducer
  //   reducer: {user: userReducer}
});
