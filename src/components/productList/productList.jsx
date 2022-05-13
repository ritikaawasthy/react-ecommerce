import {addProductCard} from "./utill";
import "./product-list.css";

function ProductList(props){
  const productList= (props.product !=undefined)? props.product :[]
  return(productList.map((item)=>addProductCard(item))
  )
}
export {ProductList}
