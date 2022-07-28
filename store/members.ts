import { createSelector, createSlice } from "@reduxjs/toolkit";

type Action = {
  name: string;
  payload: {
    memberName: string;
  };
};

type Member = {
  memberName: string;
};

const slice = createSlice({
  name: "members",
  initialState: [],
  reducers: {
    addMember: (members, action) => {
      console.log("[" + 32 + "m" + "action : " + "[0m", action);
      members.push({ memberName: action.payload.memberName, features: [] });
    },
    addFeatureToMember: (members, action) => {
      // member name to find
      const indexMember = members.indexOf(
        (member) => member === action.payload.memberName
      ); // dont do it :)
      //console.log("[" + 32 + "m" + "indexMember : " + "[0m", action);
      members[0].features.push(action.payload.feature);
    },
  },
});

export const getBugsOfMember = createSelector(
  (state) => state.entities.members,
  (members) => {
    const member = features.filter((member) => member === "Eric");
    return member[0].features;
  }
);

export const { addMember, addFeatureToMember } = slice.actions;
export default slice.reducer;
