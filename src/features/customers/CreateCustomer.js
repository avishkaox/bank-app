import { useState } from "react";
import { createCustomer } from "./customerSlice";
import { useDispatch } from "react-redux";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(createCustomer(fullName));
  }

  return (
    <div>
      {/* array methods  */}
      {/* {Array.map((item , index)=>(
        <p key={index} >{item}</p>
      ))}
      {Array.filter((item)=>item > 2)}
      {Array.reduce((previous, current) => 
        previous + current
      , 0)}
      {Array.slice().sort((a,b)=>a-b)} */}
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
