import React from "react";
import classes from "./Checkout.module.css";
const Summary = () => {
  return (
    <div className={classes.sumarry}>
      <h1>Your Order Summary</h1>
      <div className={classes.sumarry2}>
        <div className={classes.product_details}>
          <div>
            <img
              style={{ height: "90px", width: "80px" }}
              src="https://lmsin.net/cdn-cgi/image/h=150,w=150,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011183654-Blue-BLUE-1000011183654-31032022_01-2100.jpg"
              alt="1"
            ></img>
          </div>
          <div>
            <span>Max</span>
            <br></br>
            <p style={{ fontSize: "14px" }}>
              MAX Printed Stright Kurta with Straight Pants
            </p>
            <p>Price: Rs249</p>
          </div>
        </div>
      </div>
      <div className={classes.product_total}>
        <div>
          <h1>Total</h1>
        </div>
        <div>
          <h1> Rs249</h1>
        </div>
      </div>
    </div>
  );
};

export default Summary;
