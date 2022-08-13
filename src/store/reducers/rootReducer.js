import { combineReducers } from "redux";
import { backlogReducer } from "./backlogReducer";
import { doneReducer } from "./doneReducer";
import { inProgressReducer } from "./inProgressReducer";

export const rootReducer = combineReducers({
  backlog: backlogReducer,
  inProgress: inProgressReducer,
  done: doneReducer,
});
