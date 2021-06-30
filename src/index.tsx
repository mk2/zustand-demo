import { StrictMode } from "react";
import { render } from "react-dom";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
