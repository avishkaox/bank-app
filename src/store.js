import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: ",",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdrawal":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function CustomerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/register":
      return {
        ...state,
        fullName: action.payload.fullname,
        nationalID: action.payload.nationalid,
        createdAt: action.payload.createdat,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
const customerstore = createStore(CustomerReducer)

// store.dispatch({ type: "account/deposit", payload: 200 });
// store.dispatch({ type: "account/withdrawal", payload: 20 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "car loan",
//   },
// });

function deposite(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdrawal", payload: amount };
}
function requestLoan(loanamount) {
  return {
    type: "account/requestLoan",
    payload: {
      amount: loanamount,
      purpose: "car loan",
    },
  };
}
function payLoan() {}

store.dispatch(deposite(200));
store.dispatch(withdraw(20));
store.dispatch(requestLoan(2000));
console.log(store.getState());

function createCustomer(fullname, nationalid) {
  return {
    type: "customer/register",
    payload: { fullname, nationalid , createdat:'now' },
  };
}
customerstore.dispatch(createCustomer("Avishka Madushanka", "973311166V"));
console.log(customerstore.getState());
