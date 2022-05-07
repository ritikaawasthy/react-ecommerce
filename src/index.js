import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import "./styles/styles.css";
import {AuthProvider} from "./context/authContext";
import {ProductProvider} from "./context/productContext"
import {WishlistProvider} from "./context/wishlistContext"
import {CartProvider} from "./context/cartContext"
import {BrowserRouter} from "react-router-dom";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <App/>
          </CartProvider>        
        </WishlistProvider>
      </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
