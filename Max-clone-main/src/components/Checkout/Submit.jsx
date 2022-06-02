import React from "react";
import classes from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";

function Submit() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    alert("Your order has been placed");
    navigate("/");
  };
  return (
    <div className={classes.submit}>
      <div>
        {" "}
        <p>
          By clicking on Proceed to Payment, you agree to our Terms and
          Conditions
        </p>
      </div>
      <div className={classes.submitBtn}>
        {" "}
        <button onClick={submitHandler}>Pay Now</button>
      </div>
    </div>
  );
}

export default Submit;
