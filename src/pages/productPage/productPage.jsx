import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Filter, ProductList} from "../../components/index";
import "./product-page.css";
import {useProduct} from "../../context/productContext";
import axios from "axios";

function ProductPage(){
  const {categoryName}=useParams();
  const {productState, productDispatch} = useProduct();

  const getAllProducts=async()=>{
      try{
        const response= await axios.get(`/api/products`);
          productDispatch(()=>({
             type: "SET_PRODUCTS",
             payload:response.data.products}))
      }catch(error){
        console.log(error)
      }
    }

  useEffect(()=>{
    if(categoryName){
      console.log("insideCate")
      productDispatch({type:"FILTER_BY_CATEGORY", payload:productState, option:{category: categoryName}});
    }
  }, [])


  return(
    <section className='productPageLayoutContainer'>
      <article className='productPageLayoutSide primary'>
        <Filter filterCategory={categoryName} ></Filter>
      </article>
      <article className='productPageLayoutMain'>
      { (productState!=undefined) ? <ProductList product={productState.products}></ProductList>
    : ""
  }
      </article>
    </section>
  );
}
export{ProductPage}
