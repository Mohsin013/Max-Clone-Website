import React from 'react'
import CheckoutHeader from './CheckoutHeader.jsx'
import ShippingMethod from './ShippingMethod.jsx'
import PaymentMethod from './PaymentMethod.jsx'
import PaymentOther from './PaymentOther.jsx'
import classes from "./Checkout.module.css";
import Summary from './Summary.jsx'
import Ways from './Ways.jsx'
const Checkout = () => {
  return (

    <div  >
      <div>
        <CheckoutHeader />
      </div>

     <div className={classes.mainbar}>
     <div className={classes.leftbar}>
      <div >
        <ShippingMethod />
      </div>
      <div>
       <PaymentMethod/>
      </div>
      <div>
    <PaymentOther/>
      </div>
      </div>
      <div className={ classes.righbar}>
       <Summary/>
       <Ways/>
      </div>
     </div>
     
      
    </div>



  )
}

export default Checkout