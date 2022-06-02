import React from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const Basket = () => {
  const bsk = JSON.parse(localStorage.getItem('cartItem'))||[]
  // console.log(bsk)

  const [data, setdata] = React.useState(bsk);
  const [total, setTotal] = React.useState(0);

  const handleFilter = (id) => {
    const newData = data.filter((item) => {
      return item.id !== id;
    });

    setdata(newData);
  };
  const maindiv = {
    display: "flex",
    width: "80%",
    margin: "auto",
    justifyContent: "space-between",
  };

  const leftdiv = {
    width: "55%",
  };

  const rightdiv = {
    width: "40%",
  };

  React.useEffect(() => {
    // console.log("x");
    setTotal(
      data.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)
    );
  }, [data]);

   

  
     return (
    <>
      <div>
        <h1 style={{ fontSize: "40px", margin: "10px" }}>
          Your Shopping Basket
        </h1>
        <br />
        <hr />
        <br />
        <h2 style={{ fontSize: "20px", fontWeight: "bolder", margin: "10px" }}>
          {data.length} Products
        </h2>
        <br />
      </div>
      <div style={maindiv}>
        <div style={leftdiv}>
          {data.map((item) => {
            return (
              <LeftSide
                data={item}
                key={Math.random().toString()}
                setData={setdata}
                filter={handleFilter}
                total={total}
                setTotal={setTotal}
              />
            );
          })}
        </div>
        <div style={rightdiv}>
          <RightSide total={total} />
        </div>
      </div>
    </>
  );
};
