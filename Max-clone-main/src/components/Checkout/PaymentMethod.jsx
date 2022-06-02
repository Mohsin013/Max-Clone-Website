import { display } from "@mui/system";
import React from "react";
import classes from "./Checkout.module.css";
const Payment_method = () => {
  return (
    <div className={classes.payment_method}>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Select a payment method
      </p>
      <label>
        <div className={classes.payment_method2}>
          <div>
            <img
              style={{ marginTop: "15px" }}
              src="https://i1.lmsin.net/website_images/ae/checkout/card-payment.svg"
              alt="1"
            ></img>
          </div>
          <div>
            <strong>Credit/Debit Card</strong>
            <br></br>
            <span>Use your Credit or Debit card</span>
          </div>
        </div>
        <div className={classes.payment_method3}>
          <form>
            <strong>Card Number</strong>
            <br></br>
            <input
              type="number"
              placeholder="Enter your 16 digit card number"
            ></input>
            <br></br>
            <strong>Name on Card</strong>
            <br></br>
            <input type="text" placeholder="Name on Card"></input>
            <br></br>
            <strong>Expiry Date</strong>
            <br></br>
            <select>
              <option>MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select>
              <option>YYYY</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
            </select>
            <input
              style={{ width: "18%", height: "auto" }}
              type="password"
              placeholder="CVV"
              maxlength="3"
            ></input>
            <br></br>

            <div className={classes.payment_method4}>
              <input style={{ width: "20px" }} type="checkbox"></input>
              <span style={{ marginLeft: "10px" }}>
                Save this card for a faster checkout experience
              </span>
            </div>
            <br></br>
            <strong>Billing address</strong>
            <br></br>
            <div className={classes.payment_method4}>
              <input style={{ width: "20px" }} type="checkbox"></input>
              <span style={{ marginLeft: "10px" }}>
                {" "}
                Is billing address the same as shipping address?
              </span>
            </div>
          </form>
        </div>
      </label>
    </div>
  );
};

export default Payment_method;
