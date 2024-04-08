/*
* 1. `index.js` file is a bridge between `App.js` file and the web
* 2. The file (line6 - line 10) combines the following together:
* 1) React
* 2) Library for the conversation between React and web browsers (React DOM)
* 3) Component styles
* 4) Components created inside App.js
*/
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);