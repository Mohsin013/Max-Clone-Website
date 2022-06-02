import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 80px;
  font-weight: 500;
  font-size: 14px;
  padding: 5px 15%;
  color: white;
  margin: auto;
  overflow: hidden;


  background-color: black;

  a {
    text-decoration: none;
  }
  .left {
    color: white;
    display: flex;
    gap: 30px;
    width: 50%;
    justify-content: space-aroun;
  }
  .right {
    color: white;
    display: flex;
    gap: 30px;
    width: 50%;
    justify-content: right;
  }
  abbr {
    text-decoration: none;
  }
`;

export const NavbarTop = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      {/* keep all the NavLinks here */}
      <Wrapper >
        <div className="left">
          <div>
            {" "}
            <LocalShippingIcon />{" "}
            <Link to="/free-shipping"> Free Shipping </Link>{" "}
          </div>
          <div>
            {" "}
            <StorefrontOutlinedIcon />{" "}
            <Link to="/return-to-store">Return To Store </Link>{" "}
          </div>
          <div>
            {" "}
            <StorefrontOutlinedIcon />{" "}
            <Link to="/click-and-collect"> Click & Collect </Link>{" "}
          </div>
        </div>
        <div className="right">
          <div>
            {" "}
            <Link to="/download-our-app">DownLoad Our Apps</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/store-locator">Store Locator</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/help">Help</Link>{" "}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NavbarTop;
