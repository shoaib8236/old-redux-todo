import { combineReducers } from "redux";
import todoReducer from "./todo/TodoReducer";

export default combineReducers({
  todo: todoReducer,
});
