import React, { useEffect, useState } from "react";
import style from "./men.module.css";

const Men = () => {
  const [show, setShow] = useState([]);
  const [filterSize, setFilterSize] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  // const [cart, setCart] = useState({});

  var addToCart = JSON.parse(localStorage.getItem("cartItem")) || [];

  useEffect(() => {
    fetch(`http://localhost:8080/menspage`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((er) => console.log(er));
  }, []);

  const handleAdd = (item) => {
    // setCart(item);
    addToCart.push(item);
    localStorage.setItem("cartItem", JSON.stringify(addToCart));

    // console.log(cart);
  };

  return (
    <>
      <h1 className={style.TopHead}>Tops</h1>

      <div className={style.Sflex}>
        <div className={style.ssflex}>
          <select onClick={(e) => setSortPrice(e.target.value)}>
            <option>Price</option>
            <option value="asc">High to Low</option>
            <option value="dec">Low to High</option>
          </select>

          <select>
            <option>Type</option>
            <option></option>
            <option></option>
            <option></option>
          </select>

          <select>
            <option>Style</option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select>
            <option>Design</option>
            <option></option>
            <option></option>
            <option></option>
          </select>

          <select onChange={(e) => setFilterSize(e.target.value)}>
            {/* <optgroup label="Swedish Cars"> */}
            <option value="">Size</option>
            <option value="Xs">XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            {/* </optgroup> */}
          </select>

          <select onChange={(e) => setFilterColor(e.target.value)}>
            <option>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Pink</option>
          </select>

          <select onChange={(e) => setFilterBrand(e.target.value)}>
            <option>Brand</option>
            <option>PALM ANGLE</option>
            <option>HERON PRESTON</option>
            <option>WALES BONNER</option>
            <option>REEBOK</option>
            <option>BALENCIAGA</option>
            <option>MAD PARIS</option>
            <option>GUCCI</option>
          </select>

          <select>
            <option>Catogary</option>
            <option>Men</option>
            <option>Women</option>
            <option>Boys</option>
            <option>Girls</option>
          </select>

          <select onClick={(e) => setSortPrice(e.target.value)}>
            <option>Price</option>
            <option value="asc">High to Low</option>
            <option value="dec">Low to High</option>
          </select>

          <select onChange={(e) => setFilterRating(e.target.value)}>
            <option>Rating</option>
            <option>★★★★★</option>
            <option>★★★★</option>
            <option>★★★</option>
            <option>★★</option>
            <option>★</option>
          </select>
        </div>
      </div>

      <div className={style.main}>
        {show
          .filter((sze) => {
            if (filterSize === "") {
              return sze;
            } else {
              return sze.size === filterSize;
            }
          })
          .filter((brnd) => {
            if (filterBrand === "") {
              return brnd;
            } else {
              return brnd.brand === filterBrand;
            }
          })
          .filter((rtng) => {
            if (filterRating === "") {
              return rtng;
            } else {
              return rtng.rating === filterRating;
            }
          })
          .filter((clr) => {
            if (filterColor === "") {
              return clr;
            } else {
              return filterColor === clr.color;
            }
          })
          .sort((a, b) => {
            if (sortPrice === "dec") {
              return a.price - b.price;
            } else if (sortPrice === "asc") {
              return b.price - a.price;
            } else {
              return 0;
            }
          })

          .map((item) => (
            <div className={style.card} key={item.id}>
              <div className={style.card_img}>
                <img src={item.image_url} alt="error loading pic" />
              </div>
              <div className={style.card_header}>
                <h3 className={style.price}>{"₹" + item.price}</h3>
                <p>{item.name}</p>
                {/* <p>{item.category}</p> */}
                <div className={style.headFlex}>
                  <select className={style.clrOpt}>
                    <option>Color</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Black</option>
                    <option>White</option>
                  </select>

                  {/* <button className={style.gold}>{item.rating}</button> */}
                  {/* <button>{item.size}</button> */}
                  <select className={style.clrOpt} style={{ color: "gray" }}>
                    <option>Select Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <button
                    className={style.btn}
                    onClick={() => {
                      handleAdd(item);
                    }}
                  >
                    ADD TO BASKET
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Men;
