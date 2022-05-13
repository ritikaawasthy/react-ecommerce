import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Filter, ProductList} from "../../components/index";
import "./product-page.css";
import axios from "axios";
import {useProduct} from "../../context/productContext";
import {useCart} from "../../context/cartContext";

function ProductPage(){
  const {categoryName}=useParams();
  const {productState, productDispatch} = useProduct();
  const {alert}= useCart();

  useEffect(()=>{
    (async () => {
      try{
        const response= await axios.get(`/api/products`);
        if(categoryName){
          productDispatch({category:[categoryName],payload: response.data.products,type: "FILTER_BY_CATEGORY_INITIAL"})
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
        <Filter></Filter>
      </article>
      <article className='productPageLayoutMain'>
        <div class="alert primary alert-msg" style={{display:alert.display}}>
            <p>{alert.message}</p>
            <span class="alert-close">&#10540;</span>
        </div>
        {
          productState && <ProductList product={productState.filterProducts}></ProductList>
        }
      </article>
    </section>
  );
}
export{ProductPage}
