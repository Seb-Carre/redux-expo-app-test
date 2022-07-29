import { combineReducers } from "redux";

import bugsReducer from "./bugs";
import featureReducer from "./features";
import membersReducer from "./members";
import projectReducer from "./projects";

export default combineReducers({
  features: featureReducer,
  bugs: bugsReducer,
  projects: projectReducer,
  members: membersReducer,
});
