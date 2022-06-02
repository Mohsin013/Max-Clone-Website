import React from "react";
import classes from "./Checkout.module.css";
import Submit from "./Submit";
const PaymentOther = () => {
  return (
    <div className={classes.Payment_other}>
      <div className={classes.Payment_other2}>
        <div>
          <img
            style={{ width: "50px" }}
            src="https://i1.lmsin.net/website_images/in/my-account/ico-payment-netbanking.png"
            alt="1"
          ></img>
        </div>
        <div>
          <strong>Net Banking</strong>
          <br></br>
          <span>Pay by your preferred bank account.</span>
        </div>
      </div>
      <div className={classes.Payment_other2}>
        <div>
          <img
            style={{ width: "50px" }}
            src="https://i1.lmsin.net/website_images/in/my-account/ico-payment-wallet.png"
            alt="1"
          ></img>
        </div>
        <div>
          <strong>Wallets</strong>
          <br></br>
          <span>Pay with your preferred wallet.</span>
        </div>
      </div>
      <div className={classes.Payment_other2}>
        <div>
          <img
            style={{ width: "50px" }}
            src="https://dd311b21463486cea6e6-ba57f67b7c05f7cbe632f35f74bd7340.ssl.cf3.rackcdn.com/Checkout/order_summary.png"
            alt="1"
          ></img>
        </div>
        <div>
          <strong>Cash On Delivery</strong>
          <br></br>
          <span>+ Rs49</span>
        </div>
      </div>
      <div className={classes.Payment_other2}>
        <div>
          <img
            style={{ width: "50px" }}
            src="https://i1.lmsin.net/website_images/payment/upi.png"
            alt="1"
          ></img>
        </div>
        <div>
          <strong>Cash On Delivery</strong>
          <br></br>
          <span>+ Rs49</span>
        </div>
      </div>
      <Submit />
    </div>
  );
};

export default PaymentOther;
