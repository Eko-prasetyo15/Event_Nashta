import { combineReducers } from "redux";
import events from "./events";
import dashboard from "./dashboard";

export default combineReducers({
  events,
  dashboard,
});
