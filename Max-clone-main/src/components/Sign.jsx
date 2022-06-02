import React, { useState } from "react";
import { useNavigate } from "react-router";
// import styled from 'styled-components';
// import { Inputs } from './form.styled';
import { useToast, Wrap, WrapItem } from "@chakra-ui/react";
import Popup from "reactjs-popup";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import Name from "./Name";
// import Name from './Name'
const Sign = () => {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];

  const [formData, setForm] = useState("");
  const navigate = useNavigate();
  console.log(formData);
  const handleForm = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    const inputChange = e.target.name;
    setForm({ ...formData, [inputChange]: e.target.value });
  };
  return (
    <>
      <Popup trigger={<button> Trigger</button>}>
        <div
          style={{
            marginLeft: "20px",
            margin: "auto",
            height: "400px",
            width: "800px",
            border: "1px solid white",
            borderRadius: "5px",
            marginTop: "50px",
            fontSize: "50px",
            paddingLeft: "10px",
          }}
        >
          <h1>Sign-In</h1>
          <p style={{ fontSize: "20px" }}>
            Enjoy the convenience of a single account across all participating
            brands
          </p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Mobile Number</p>
          <form onSubmit={handleForm}>
            {/* <Inputs type="text" name="username" placeholder='Enter Username' onChange={handleClick}></Inputs>
        <Inputs type="password" name="password"  placeholder='Enter Password' onChange={handleClick}></Inputs> */}

            <InputGroup size="lg" width="90%">
              <InputLeftAddon children="+91" />
              <Input
                type="tel"
                placeholder="phone number"
                onChange={handleClick}
              />
            </InputGroup>
          </form>

          <p style={{ fontSize: "20px" }}>
            By creating your account you agree to our{" "}
            <a
              href="https://www.maxfashion.in/in/en/termsandconditions"
              style={{ underLine: "blue" }}
            >
              Terms and Condition
            </a>
          </p>

          <Popup
            trigger={
              <Button
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="red"
                position="center"
                margin="auto"
              >
                {" "}
                Signup
              </Button>
            }
          >
            <h1>Enter The OTP</h1>

            <PinInput>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </Popup>
        </div>
        <Button
          onClick={() =>
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 5000,
              isClosable: true,
            })
          }
        >
          Submit
        </Button>
      </Popup>
    </>
  );
};

export default Sign;
