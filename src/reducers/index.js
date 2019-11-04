import { combineReducers } from "redux";
import { repositoryReducer } from "./repository";

export const rootReducer = combineReducers({
  repository: repositoryReducer,
});
