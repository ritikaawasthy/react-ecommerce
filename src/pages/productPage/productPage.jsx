import {useParams} from "react-router-dom";
import {useEffect, useReducer} from "react";
import {Filter, ProductList} from "../../components/index";
import "./product-page.css";
import axios from "axios";
import {useProduct} from "../../context/productContext";

function ProductPage(){
  const {categoryName}=useParams();
  const {productState, productDispatch} = useProduct();

  useEffect(()=>{
    (async () => {
      try{
        const response= await axios.get(`/api/products`);
        if(categoryName){
          productDispatch({
            type: "FILTER_BY_CATEGORY",
            payload: response.data.products,
            option: {category: categoryName}
          })
        }else{
          productDispatch({
            type: "SET_PRODUCTS",
            payload:response.data.products })
        }
      }catch(error){
        console.log(error)
      }
      })();
  }, [])


  return(
    <section className='productPageLayoutContainer'>
      <article className='productPageLayoutSide primary'>
        <Filter filterState={productState} setFilter={productDispatch} ></Filter>
      </article>
      <article className='productPageLayoutMain'>
        {
          productState && <ProductList product={productState.products}></ProductList>
        }
      </article>
    </section>
  );
}
export{ProductPage}
