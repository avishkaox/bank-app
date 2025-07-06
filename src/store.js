import { combineReducers, createStore } from "redux";
import reducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

const rooReducer = combineReducers({
  account: reducer,
  customer: CustomerReducer,
});

const store = createStore(rooReducer);

export default store;
