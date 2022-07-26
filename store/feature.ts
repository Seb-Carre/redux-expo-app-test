// duck pattern

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "feature",
  initialState: [],
  reducers: {
    addFeature: (feature, action) => {
      feature.push(action.payload.name);
    },
    deleteFeature: (feature, action) => {
      feature.filter((element) => element !== action.payload.name);
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

export const { addFeature, deleteFeature } = slice.actions;
export default slice.reducer;
