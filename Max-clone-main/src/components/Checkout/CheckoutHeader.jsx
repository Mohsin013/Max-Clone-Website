import React from "react";
import classes from "./Checkout.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
function CheckoutHeader() {
  return (
    <div className={classes.checkout_header}>
      <div>
        <img
          style={{ height: "35px", width: "98px" }}
          src="https://i1.lmsin.net/website_images/in/logos/header/logo-max.svg"
          alt="1"
        ></img>
      </div>
      <div>
        <span>
          <a href="tel:1800-123-1444">
            <PhoneIcon />
          </a>
          Call 1800-123-1444
        </span>
        <br></br>
        <time>Monday - Saturday, 09:00AM - 07:00PM</time>
      </div>
    </div>
  );
}

export default CheckoutHeader;
