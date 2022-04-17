import {addProductCard} from "./utill";
import "./product-list.css";
function ProductList(props){
  const productList= (props.productList !=undefined)? props.productList :[]
  return(
    productList.map((item)=>addProductCard(item))
  )
}
export {ProductList}
