import {useContext, createContext, useState} from "react";
import axios from "axios";
const WishlistContext= createContext();

function WishlistProvider({children}){
  const [wishlistState, setWishlistState]= useState([]);

  return(
    <WishlistContext.Provider value={{wishlistState, setWishlistState}}>
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist= ()=>useContext(WishlistContext);

export{ WishlistProvider, useWishlist}
