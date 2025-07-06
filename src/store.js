import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

const rooReducer = combineReducers({
  account: reducer,
  customer: CustomerReducer,
});

const store = createStore(rooReducer , applyMiddleware(thunk));

export default store;
