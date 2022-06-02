import React, { useState } from "react";
import "./Basket.css";

const Basket = () => {
  var cart = JSON.parse(localStorage.getItem("cartItem")) || [];
  const [products, setProducts] = useState(cart);

  let totalMrp = cart.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)
  const handleRemove = (id) => {
    let newTodo = products.filter((item) => item.id !== id);
    setProducts(newTodo);
  };

  return (
    <>
      <div className="basketMainHead">
        <p className="basketHeading">Your Shopping Basket</p>
        <hr />
      </div>
      <div className="basketMain">
        <div className="basketMainLeft">
          {products.map((item) => (
            <div key={item.id} className="map_div">
              <div>
                <img src={item.image_url} className="images" alt="..." />
              </div>
              <div>
                <h5>{item.name}</h5>
                <p>{`₹ ${item.price}`}</p>
                <p>{`Colour: ${item.color}`}</p>
                <p>{`Size: ${item.size}`}</p>
              </div>

              <p onClick={() => handleRemove(item.id)}>Remove</p>
            </div>
          ))}
        </div>
        <div className="basketMainRight">
          <div className="basketMainDiv1">
            <div className="basketDiv1">
              <p>Deliver to </p>
              <input className="basketInp" placeholder="Enter pincode" />
              <button className="basketInpBtn">Check</button>
            </div>
            <p
              style={{
                backgroundColor: "linen",
                fontSize: "14px",
                padding: "10px",
              }}
            >
              Enter pin code in box above for delivery estimates and charges
            </p>
          </div>
          <div className="basketDiv2">
            <div>
              <img
                src="https://www.maxfashion.in/static/icons/gift-box.png"
                alt="Error loading pic"
              />
            </div>
            <div>
              <div className="basketDiv2Flex">
                <div>Offers for you!</div>
                <div style={{ color: "blue" }}>Select</div>
              </div>
              <p style={{ color: "gray" }}>
                Choose and apply voucher in 2 simple steps
              </p>
            </div>
          </div>
          <div className="basketDiv3">
            <div className="basketDiv3flex1">
              <p>Total MRP</p>
              <h3>₹ {totalMrp}</h3>
            </div>
            <div className="basketDiv3flex2">
              <p>Shipping charge</p>
              <h3>Free</h3>
            </div>
            <div className="basketDiv3flex3">
              <h2>Total</h2>
              <h2>$</h2>
            </div>
            <hr style={{ width: "90%" }} />
            <button className="basketDiv3btn">Checkout now</button>
          </div>
          <div className="basketDiv4">
            <div className="basketDiv4Flex">
              <p style={{ fontSize: "16px" }}>Landmark Reward points</p>
              <button className="basketDiv4Btn">Login</button>
            </div>
            <p style={{ fontSize: "14px", color: "gray" }}>
              Tap here to log in and enrol for Landmark Rewards. Earn with every
              purchase and redeem for discounts.
            </p>
            <p style={{ color: "rgb(48,58,178)" }}>
              {" "}
              <u>Learn more</u>
            </p>
          </div>

          <div className="basketDiv5"></div>
        </div>
      </div>
    </>
  );
};

export default Basket;
