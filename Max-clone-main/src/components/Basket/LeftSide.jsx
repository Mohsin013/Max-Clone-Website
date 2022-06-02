import React from "react";

export const LeftSide = (props) => {
  const maindiv = {
    width: "100%",
    height: "351px",
    margin: "10px 0"
  };
  const upperdiv = {
    width: "98%",
    height: "200px",
    display: "flex",
    borderTop:"1px solid silver"
  };
  const img = {
    width: "20%",
    height: "80%",
    margin: "10px 0 5px 10px"
  };
  const middiv = {
    textAlign: "left"
  };
  const innerdiv = {
    textAlign: "left",
    marginLeft: "20px"
  };
  const btmdiv = {
    width: "98%",
    height: "70px",
    display: "flex",
    border:"1px solid silver",
    borderRadius:"5px"
  };

  const btm1 = {
    width: "50%",
    textAlign: "center",
    padding: "20px 20px",
    borderRight:"1px solid silver"
  };

  const btm2 = {
    display: "flex",
    width: "50%",
    justifyContent: "center",
  };

  const btn = {
    border: "0",
    height: "50px",
    margin: "10px 20px",
    color: "rgb(48,58,178)",
    fontSize: "25px",
    backgroundColor:"white",
    fontWeight:"bolder",
   
  };

  const btn2={  
    border: "0",
  color: "rgb(48,58,178)",
  fontSize: "18px",
  backgroundColor:"white",
fontWeight:"bolder",
margin:"15px,"
}


  const {
    image_url,
    name,
    brand,
    size,
    id,
    price,
   
  } = props.data;
  const [count, setCount] = React.useState(1);
  



  const Increment=()=>{
  setCount(count+1)
  props.setTotal(props.total+price)
  
    }

    const Decrement=()=>{
        if(count<=1){setCount(1)}else{
            setCount(count-1)
            props.setTotal(props.total-price)
        }
  
    }

  return (
    <>
      <div style={maindiv}>
        <div style={upperdiv}>
          <img src={image_url} style={img} alt="item"/>
          <div style={innerdiv}>
            <h3 style={{margin:"7px 0"}}>{name}</h3>
            <h4 style={{marginBottom:"7px", fontWeight:"bolder"}}>₹{price}</h4>
            <p style={{marginBottom:"7px",color:"silver",fontSize:"14px"}}>BRAND: {brand}</p>
            <p style={{marginBottom:"7px",color:"silver",fontSize:"14px"}}>SIZE: {size}</p>
          </div>
        </div>
        <div style={middiv}>
          <h3>Delivery in Enter Pincode above</h3>
        </div>
        <div style={btmdiv}>
          <div style={btm1}>
            <button style={btn2} onClick={()=>{props.filter(id)}}>Remove</button>
          </div>
          <div style={btm2}>
            <button style={btn}  onClick={Decrement}>-</button>
            <p style={{ margin: "25px 0" }}>{count}</p>
            <button style={btn} onClick={Increment}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};
