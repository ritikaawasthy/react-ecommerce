import {useContext, createContext, useState} from "react";
const WishlistContext= createContext();

function WishlistProvider({children}){
  const [wishlistState, setWishlistState]= useState([]);

  const addToWishlist=(item)=>{
    if(!wishlistState.includes(item)){
      setWishlistState([...wishlistState, item])
    }
  }

  return(
    <WishlistContext.Provider value={{wishlistState, setWishlistState, addToWishlist}}>
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist= ()=>useContext(WishlistContext);

export{ WishlistProvider, useWishlist}
