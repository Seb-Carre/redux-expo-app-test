// duck pattern

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

import { apiCall } from "./api";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: true,
    lastFetch: null,
  },
  reducers: {
    bugReceived: (bugs, action) => {
      bugs.list = action.payload;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload.name);
    },
    bugDeleted: (bugs, action) => {
      bugs.list.filter((element) => element !== action.payload.name);
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

//action creator

export const loadBugs = () =>
  apiCall({
    url: "/bugs",
    onSuccess: "bugsReceived",
  });

export const getSearchFeature = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.list.filter((bugs) => bugs === "bug1")
);

export const { bugReceived, bugAdded, bugDeleted } = slice.actions;
export default slice.reducer;
