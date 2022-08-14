import { combineReducers } from "redux";
import { authenticationReducer } from "./authenticationReducer";
import { backlogReducer } from "./backlogReducer";
import { doneReducer } from "./doneReducer";
import { inProgressReducer } from "./inProgressReducer";
import { sortReducer } from "./sortReducer";

export const rootReducer = combineReducers({
  backlog: backlogReducer,
  inProgress: inProgressReducer,
  done: doneReducer,
  authentication: authenticationReducer,
  sort: sortReducer,
});
