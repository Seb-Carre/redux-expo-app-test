import axios from "axios";

import { apiCall, apiFailed } from "../store/api";

const api = (store) => (next) => async (action) => {
  next(action);
  if (action.type === apiCall.type) {
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });
      //general
      store.dispatch(apiCall(response.data));
      // specific
      if (onSuccess)
        store.dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      // general
      store.dispatch(apiFailed(error.message));
      // specific
      if (onError) store.dispatch({ type: onError, payload: error.message });
    }
  } else {
    return next(action);
  }
};

export default api;
