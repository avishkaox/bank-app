import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";

const rooReducer = combineReducers({
  account: reducer,
  customer: CustomerReducer,
});

const store = createStore(
  rooReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
