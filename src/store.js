import { configureStore } from "@reduxjs/toolkit";
import accountreducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountreducer,
    customer: CustomerReducer,
  },
});

export default store;
