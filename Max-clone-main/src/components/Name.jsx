import React from "react";
import { useNavigate } from "react-router";
import { PinInput, PinInputField } from "@chakra-ui/react";

const Name = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Enter The OTP</p>

      <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </div>
  );
};

export default Name;
