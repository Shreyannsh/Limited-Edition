import "./index.css";
import { createRoot } from "react-dom/client";


import React from "react";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";
import UniqueProvider from "./Contexts/MainContext";
import CartProvider from "./Contexts/CartContext";
import AuthProvider from "./Contexts/AuthContext";
import WishListProvider from "./Contexts/WishListContext";
import FilterProvider from "./Contexts/FilterContext";
// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <WishListProvider>
      <CartProvider>
      <UniqueProvider>
      <FilterProvider>
      <App />
      </FilterProvider>
      </UniqueProvider>
      </CartProvider>
      </WishListProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  
);
