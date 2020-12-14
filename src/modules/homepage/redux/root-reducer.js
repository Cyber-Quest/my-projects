import { combineReducers } from "redux";

//reducers
import projects from "./panel-projects/panel-projects.reducer"; 
import user from "./crud-user/crud-user.reducer"; 

export const rootReducer = combineReducers({
  projects, 
  user
});

export default rootReducer;