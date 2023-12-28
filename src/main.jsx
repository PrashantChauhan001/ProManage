import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserContextProvider from "./contexts/UserContext";
import { BASE_URL_PREFIX } from "./utils/constants.utils";

import "./assets/styles/app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_URL_PREFIX}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
