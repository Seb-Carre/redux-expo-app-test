import { combineReducers } from "redux";

import featureReducer from "./features";
import membersReducer from "./members";
import projectReducer from "./projects";

export default combineReducers({
  features: featureReducer,
  projects: projectReducer,
  members: membersReducer,
});
