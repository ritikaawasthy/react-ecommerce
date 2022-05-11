import {createContext, useContext, useState} from "react";

const CartContext = createContext();

function CartProvider({children}) {
  const [cartState, setCartState] = useState([]);
  const [alert, setAlert]= useState({
    message:"",
    display: "none"
  })

  const removeFromCart=(item)=>{
    setCartState(()=>cartState.filter((cartItem)=>cartItem._id!==item._id))
  }

  const addToCart=(item)=>{
    if(!cartState.includes(item)){
      item.quantity=1
      setCartState([...cartState, item ])
    }else{
      let tempCartState=cartState.filter((cartItem)=>cartItem._id!==item._id)
      item.quantity+=1
      tempCartState.push(item)
      setCartState(tempCartState)
      setAlert({message: "Item already in Cart, Increased Quantity by 1", display: "flex"})
      setTimeout(()=>setAlert({...alert,display:"none"}),3000);
      tempCartState=[]
    }
  }

  return (<CartContext.Provider value={{
      cartState,
      setCartState,
      addToCart,
      alert,
      setAlert,
      removeFromCart
    }}>
    {children}
  </CartContext.Provider>)
}

const useCart =()=> useContext(CartContext);

export { useCart, CartProvider }
