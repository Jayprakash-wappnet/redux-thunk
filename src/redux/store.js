// import required packages
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// create store and pass applyMiddleware for handle thunk
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
