import React from 'react'
import classes from "./Checkout.module.css"

export const ShippingMethod = () => {
  return (
    <div className={classes.shipping_method}>

      <div className={classes.shipping_method2}>
        {/* <p style={{ fontSize: "14", marginBottom: "10px", fontWeight: "bold" }}>Add your shipping address</p> */}
        <h1 style={{ fontSize:"30px", marginBottom: "10px",fontWeight:"bold"}}>Add your shipping address</h1>
        <form>
          <label >First Name</label><br></br>
          <input type="text" placeholder='Enter your full name' ></input><br></br>
          <label >Mobile Number</label><br></br>
          <input type="number" placeholder='Enter your mobile number' ></input><br></br>
          <label >Pin Code</label><br></br>
          <input type="number" placeholder='Enter your pincode' ></input><br></br>
          <label >City</label><br></br>
          <input type="text" placeholder='Enter your City or Tawn' ></input><br></br>
          <label >State</label><br></br>
          <select id="country-state" name="country-state">
          <option value="" disabled selected hidden>Select your state</option>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CH">Chandigarh</option>
            <option value="CT">Chhattisgarh</option>
            <option value="DN">Dadra and Nagar Haveli</option>
            <option value="DD">Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="LA">Ladakh</option>
            <option value="LD">Lakshadweep</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PY">Puducherry</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UT">Uttarakhand</option>
            <option value="WB">West Bengal</option>
          </select><br></br>
          <label >Building name or number</label><br></br>
          <input type="text" placeholder='Enter building name' ></input><br></br>
          <label >Street name or number</label><br></br>
          <input type="text" placeholder='Flat/House number,Floor,Building' ></input><br></br>
          <label >Landmark (optional)</label><br></br>
          <input type="text" placeholder='Landmark' ></input><br></br>
        </form>
      </div>
    </div>
  )
}
export default ShippingMethod;


