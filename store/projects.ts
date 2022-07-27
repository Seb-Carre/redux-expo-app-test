import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push(action.payload.name);
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

export const { addProject } = slice.actions;
export default slice.reducer;
