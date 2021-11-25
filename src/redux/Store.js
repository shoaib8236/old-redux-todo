import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./RootReducer";

let middlewhare = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewhare))
);

export default store;
