import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CombineReducer from "../reducers/CombineReducer";

const initialState = {
  data: [],
};
const middlewares = [thunk];

const store = createStore(
  CombineReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
