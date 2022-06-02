import React from "react";
import "./index.css";
import App from "./App";
import "tw-elements";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
