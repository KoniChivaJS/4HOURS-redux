import { createStore, applyMiddleware } from "redux";
import { tasksReducer } from "./reducers/tasksReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(tasksReducer);
