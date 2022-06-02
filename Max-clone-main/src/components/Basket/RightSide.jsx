import React from "react";
import style from "./right.module.css";
import { useNavigate } from "react-router-dom";

export const RightSide = (props) => {
  const navigate = useNavigate();
  const [auth, isauth] = React.useState(false);
  const [pin, setPin] = React.useState("");

  const Checkpin = () => {
    if (pin.trim().length === 6) {
      isauth(!auth);
    }
    console.log(auth);
    setPin("");
  };

  const CheckoutHandler = (e) => {
    if (auth) {
      navigate("/checkout");
    } else {
      alert("Enter valid 6-digit pin")
    }
  };

  return (
    <>
      <div className={style.mainndiv}>
        <div className={style.maindiv}>
          <div className={style.div1}>
            <h3>Deliver to</h3>
          </div>
          <div className={style.div2}>
            <input
              type="number"
              placeholder="Enter Pincode"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
              }}
            />
            <button onClick={Checkpin}>Check</button>
          </div>
        </div>
        <div className={style.status}>
          {auth ? (
            <h2>Delivery is available in your area</h2>
          ) : (
            <h3>
              Enter pin code in box above for delivery estimates and charges
            </h3>
          )}
        </div>
      </div>
      <div className={style.mainmrpdiv}>
        <div className={style.mrpdiv}>
          <div className={style.mrp}>
            <h4>Total MRP:</h4>
            <h3>₹{props.total}</h3>
          </div>
          <div className={style.mrp}>
            <h4>Shipping charge</h4>
            <h3>Free</h3>
          </div>
        </div>
        <div className={style.mrpdiv2}>
          <div className={style.mrp}>
            <h3>Total </h3>
            <h3>₹{props.total}</h3>
          </div>
          <button onClick={CheckoutHandler}>Checkout Now</button>
        </div>
      </div>
    </>
  );
};
