// duck pattern

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "features",
  initialState: [],
  reducers: {
    addFeature: (features, action) => {
      features.push(action.payload.name);
    },
    deleteFeature: (features, action) => {
      features.filter((element) => element !== action.payload.name);
    },
  },
});

// // actions
// export const addFeature = createAction("addFeature");
// export const deleteFeature = createAction("removeFeature");

// // reducer

// const reducer = createReducer([], {
//   [addFeature.type]: (feature, action) => {
//     feature.push(action.payload.name);
//   },
//   [deleteFeature.type]: (feature, action) => {
//     feature.filter((element) => element !== action.payload.name);
//   },
// });

//Selectors by default
// export const getSearchFeature = (state) =>
//   state.entities.features.filter((feature) => feature === "Xbox");

// Memorisation cache selectors

export const getSearchFeature = createSelector(
  (state) => state.entities.features,
  (features) => features.filter((feature) => feature === "Xbox")
);

export const { addFeature, deleteFeature } = slice.actions;
export default slice.reducer;
