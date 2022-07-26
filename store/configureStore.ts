import { configureStore } from "@reduxjs/toolkit";

import reducer from "./feature";

const store = configureStore({
  reducer: reducer,
});

export default store;
