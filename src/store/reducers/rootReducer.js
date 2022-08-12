import { combineReducers } from "redux";
import { backlogReducer } from "./backlogReducer";

export const rootReducer = combineReducers({
  backlog: backlogReducer,
});
