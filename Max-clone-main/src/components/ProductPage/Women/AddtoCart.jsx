// import { useEffect, useState } from "react";
// import './style.css';
// import React from "react";
// // import Header from "./Header";
// // import Footer from "./Footer";
// import Rating from '@mui/material/Rating'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange } from '@mui/material/colors';
// // import StarIcon from '@mui/icons-material/Star';


// function AddtoCart() {
//     const [data, setData] = useState([]);
//     const [total,setTotal]=useState(0);
//     let [refresh,]=useState(false)
//     const cart  =  () => {
        
//         fetch("https://myntajsonserver.herokuapp.com/item").then(res=>res.json()).then((res)=>{setData(res); 
      
//        })
       
//     }
//     useEffect(()=>{
//         let sum=0;
//         fetch("https://myntajsonserver.herokuapp.com/item").then(res=>res.json()).then((res)=>{
//        res.forEach(el=>sum+=el.price);
//        setTotal(sum)
//        setData(res); 
      
//        })
//     },[data])


//     useEffect(() => {
//          cart();
//     }, [refresh]);

//     const deleting=(el)=>{
//        fetch(`https://myntajsonserver.herokuapp.com/item/${el.id}`,{method:"DELETE"});
//        fetch("https://myntajsonserver.herokuapp.com/item").then(res=>res.json()).then((res)=>{setData(res); 
//     })
      
//     }


//     return (
//         <>
//         {/* <Header/> */}
// <hr/>
// <div className="add-to-cart-main-div">
//     <div className="addto-cart-1-2"> 
//             {
//                 data.map((item) => {
//                     return (<div key={item.id}>

//                         <div className="main-container-addtocart">
//                              <div className="main-container-addtocart-1">
//                             <div>
//                         <img src={item.image} alt="img" className="product-image-addtocart" />
//                         </div>
//                         <div className="main-1-1-addtocard">
               
              
                 
//                   <h1>{item.category}</h1>
//                   <p>{item.title}</p>
//                   {/* <p>Rating :5/{item.rating.rate}</p> */}
//                   <h4>&#8360;. {(item.price)*100}</h4>

//                   </div>
                       


//                        <div className="btn-add-t"  onClick={()=>{
//                           deleting(item)
//                        }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="itemContainer-base-closeIcon">
//                        {/* <path fill="#000" fill-rule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"></path> */}
//                        </svg></div>
//                     </div>
                   
                   
//                      </div>
//                     </div>
                 

//                     )


//                 })

//             }
//            </div>
//             <div className="second-add-sec">
//                 <h5>DONATE FOR COVID-19 RELIFE</h5>
//                 <h3>Help India fight COVID 19 </h3>
//                 <Stack direction="row" spacing={3} className="add_to_card_ui">

// <Avatar sx={{ bgcolor: deepOrange[900] }}>10</Avatar>
// <Avatar sx={{ bgcolor: deepOrange[900] }}>20</Avatar>
// <Avatar sx={{ bgcolor: deepOrange[900] }}>50</Avatar>
// <Avatar sx={{ bgcolor: deepOrange[900] }}>100</Avatar>

// </Stack>
                
//             <hr/>
//             <p>Rating</p>
//             <Rating className="add_to_card_ui"
//               name="text-feedback"
//               value={4}
//               readOnly
//               precision={0.5} 
//               emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//             /> 
//             <h4 className="sig-prod-page-1">AVAILABLE OFFERS</h4>
//             <hr/>
//             <p className="sig-prod-page" >&#9679; Coupon Discount: Rs. 320 off (check cart for final savings)</p>
//  <p className="sig-prod-page">&#9679; Applicable on: Orders above Rs. 2499 (only on first purchase)</p>
//  <p className="sig-prod-page">Coupon code: MYNTRA400</p>
//  <hr/>
//                 <h1>Total Price :{total*100}</h1>
//                 <hr/>
//               <a href="/payment"><button className="btn">PLACE ORDER</button></a>  
//             </div>
//             </div>
//             <hr/>
//             {/* <Footer/> */}
//         </>
//     )
// }

// export default AddtoCart;