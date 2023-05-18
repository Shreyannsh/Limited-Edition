import "./index.css";
import { createRoot } from "react-dom/client";


import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";
import UniqueProvider from "./Context/MainContext";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <UniqueProvider>
      <App />
      </UniqueProvider>
    </Router>
  </React.StrictMode>,
  
);
