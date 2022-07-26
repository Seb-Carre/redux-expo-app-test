// duck pattern

import { createAction, createReducer } from "@reduxjs/toolkit";

// actions
export const addFeature = createAction("addFeature");
export const deleteFeature = createAction("removeFeature");

// reducer

const reducer = createReducer([], {
  [addFeature.type]: (feature, action) => {
    feature.push(action.payload.name);
  },
  [deleteFeature.type]: (feature, action) => {
    feature.filter((element) => element !== action.payload.name);
  },
});

export default reducer;
