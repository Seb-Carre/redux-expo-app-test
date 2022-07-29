import { configureStore } from "@reduxjs/toolkit";

import api from "../middleware/api";
import logger from "./logger";
import reducer from "./reducer";

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger({ destination: "console" }),
    api,
  ],
});

export default store;
