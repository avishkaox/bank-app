const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: ",",
};



export default function CustomerReducer(state = initialStateCustomer, action) {
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


export function createCustomer(fullname, nationalid) {
  return {
    type: "customer/register",
    payload: { fullname, nationalid, createdat: "now" },
  };
}