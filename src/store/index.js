import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./reducers/tasksReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  tasksReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
