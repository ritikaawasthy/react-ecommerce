import {useContext, createContext,useReducer, useState, useEffect} from "react";
import {filterReducer} from "../components/filter/filterReducer"

const ProductContext=createContext();

const ProductProvider=({children})=>{


  const [productState, productDispatch]= useReducer(filterReducer, {
    filter:{
      category:null,
      price: "",
      rating: "",
    },
    products: null
  });


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

// import {useState, useEffect} from "react";
// import axios from 'axios';
// import {useState, useEffect} from "react";
// import axios from 'axios';
//
// const useProduct=(categoryName)=>{
//   const [state, dispatch]= useReducer(filterReducer, {
//     filter:{}, products: []
//   }
//   useEffect(()=>{
//     async function getAllProducts(categoryName){
//       try{
//         const response= await axios.get(`/api/products`);
//         const allProducts= response.data.products;
//         if(categoryName){
//           dispatch(()=>({
//              type: "SET_PRODUCTS",
//              payload:allProducts.filter(item=>item.categoryName===category)}))
//         }else{
//           dispatch(()=>({
//              type: "SET_PRODUCTS",
//              payload:allProducts}))
//         }
//       }catch(error){
//         console.log(error)
//       }
//     }
//     getAllProducts(categoryName)
//   }, [])
//
//
//
// }
//
// export{useProduct}
