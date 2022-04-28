import {useContext, createContext,useReducer, useEffect} from "react";
import {filterReducer} from "../components/filter/filterReducer"
import axios from "axios";
const ProductContext=createContext();

const ProductProvider=({children})=>{

  const [productState, productDispatch]= useReducer(filterReducer, {
    filter:{
      category:"",
      price: {
        SORT_PRICE_HIGH: false,
        SORT_PRICE_LOW: false
      },
      rating: "",
    },
    products: []
  });

  useEffect(()=>{
    (async () => {
      try{
        const response= await axios.get(`/api/products`);
        productDispatch({
          type: "SET_PRODUCTS",
          payload:response.data.products })
      }catch(error){
        console.log(error)
      }
      })();
  }, [])


  return(
    <ProductContext.Provider value={{
      productState, productDispatch
    }}>
    {children}
  </ProductContext.Provider>
  );
}

const useProduct= ()=>useContext(ProductContext);

export{ ProductProvider, useProduct}
