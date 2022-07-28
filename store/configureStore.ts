import { configureStore } from "@reduxjs/toolkit";

import logger from "./logger";
import reducer from "./reducer";

const store = configureStore({
  reducer: reducer,
  middleware: [logger({ destination: "console" })],
});

export default store;
