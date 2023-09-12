import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import { api } from "./apiSlice";

export default configureStore({
  // add every slices you created, add reducer here:
  reducer: { counter: counterReducer, [api.reducerPath]: api.reducer },
  middleware: (gDM) => gDM().concat(api.middleware),
  //  for example: user reducer
  //   reducer: {user: userReducer}
});
