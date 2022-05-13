
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Cart} from "../../components/index";
function CartPage(){


  return(
    <div>
      <hr></hr>
        <h2 className="center-txt">Cart<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></h2>
      <hr></hr>
      <Cart/>
    </div>
);
}
export{CartPage}
