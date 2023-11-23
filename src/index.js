import "./index.css";
import { createRoot } from "react-dom/client";

import React from "react";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import UniqueProvider from "./Contexts/MainContext";
import CartProvider from "./Contexts/CartContext";
import AuthProvider from "./Contexts/AuthContext";
import WishListProvider from "./Contexts/WishListContext";
import FilterProvider from "./Contexts/FilterContext";
import AddressProvider from "./Contexts/AddressContext";
// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UniqueProvider>
          <AddressProvider>
            <WishListProvider>
              <CartProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </CartProvider>
            </WishListProvider>
          </AddressProvider>
        </UniqueProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
