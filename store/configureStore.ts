import { configureStore } from "@reduxjs/toolkit";

import func from "../middleware/func";
import logger from "./logger";
import reducer from "./reducer";

const store = configureStore({
  reducer: reducer,
  middleware: [logger({ destination: "console" }), func],
});

export default store;
