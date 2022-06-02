import React from "react";
import classes from "./Checkout.module.css";
const Ways = () => {
  return (
    <div className={classes.ways}>
      <h1 style={{ fontWeight: "bold", marginTop: "20px" }}>
        Ways You can Pay
      </h1>
      <br></br>
      <div className={classes.ways2}>
        <div>
          <img
            style={{ height: "40px", width: "60px" }}
            src="https://i1.lmsin.net/website_images/ae/checkout/logo-visa.png"
            alt="."
          ></img>
        </div>
        <div>
          <img
            style={{ height: "40px", width: "60px" }}
            src="https://i1.lmsin.net/website_images/ae/checkout/logo-mc.png"
            alt="."
          ></img>
        </div>
        <div>
          <img
            style={{ height: "40px", width: "60px" }}
            src="https://i1.lmsin.net/website_images/in/checkout/logo-rupay.svg"
            alt="."
          ></img>
        </div>
        <div>
          <img
            style={{ height: "30px", width: "70px" }}
            src="https://i1.lmsin.net/website_images/ae/checkout/logo-cash.png"
            alt="."
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Ways;
