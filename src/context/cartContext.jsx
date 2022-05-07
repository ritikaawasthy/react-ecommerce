import {createContext, useContext, useState} from "react";

const CartContext = createContext();

function CartProvider({children}) {
  const [cartState, setCartState] = useState([]);
  return (<CartContext.Provider value={{
      cartState,
      setCartState
    }}>
    {children}
  </CartContext.Provider>)
}

const useCart =()=> useContext(CartContext);

export { useCart, CartProvider }
