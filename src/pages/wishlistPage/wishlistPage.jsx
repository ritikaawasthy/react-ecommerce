
import "./wishlist.css";
import {useWishlist} from "../../context/wishlistContext"
import {useCart} from "../../context/cartContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faTrashCan} from '@fortawesome/free-solid-svg-icons';


function WishlistPage(){
  const {wishlistState, setWishlistState}= useWishlist();
  const {addToCart,alert, setAlert  }= useCart();

  const addWishlistCard=(item)=>((item.sale.onSale)?
        <article className="card card-shadow w-s" key={item._id}>
          <div className="background">
            <img className="product-img-s" src={item.picture} alt="product"></img>
          </div>
          <div className="card-content ">
            <FontAwesomeIcon className="primary-col white-trans-bg round f-m wishlist-btn" icon={faTrashCan} onClick={()=>setWishlistState(()=>wishlistState.filter((product)=>product._id!==item._id)) }></FontAwesomeIcon>
            <i className="sale-tag sale-tag-bg end">
              SALE
              <i className="fa-solid fa-tag"></i>
            </i>
          </div>
          <div className="card-content-foot inline fl-space">
            <div >
              <p className="original-price f-s center mg-l-m ">₹ {item.price}</p>
              <p className="sale-price  mg-l-m">₹ {item.sale.salePrice}</p>
            </div>
            <div className="card-content stacked">
                <a onClick={()=>addToCart(item)} className="btn primary mg-b-s mg-l-s center">
                  <FontAwesomeIcon icon={faShoppingCart} className="mg-r-s"></FontAwesomeIcon>Add to cart
                </a>
            </div>
          </div>
          </article>
      :<article className="card card-shadow w-s" key={item._id}>
          <div className="background">
            <img className="product-img-s" src={item.picture} alt=""></img>
          </div>
          <div className="card-content ">
          <FontAwesomeIcon className="primary-col white-trans-bg round f-m wishlist-btn" icon={faTrashCan} onClick={()=>setWishlistState(()=>wishlistState.filter((product)=>product._id!==item._id)) }></FontAwesomeIcon>
          </div>
          <div className="card-content-foot fl-space inline">
              <p className="f-m center mg-l-m">₹ {item.price}</p>
              <div className="card-content stacked">
                  <a onClick={()=>addToCart(item)} className="btn primary mg-b-s mg-l-s center">
                    <FontAwesomeIcon icon={faShoppingCart} className="mg-r-s"></FontAwesomeIcon>Add to cart
                  </a>
              </div>
          </div>
        </article>);
  return(
    <div>
      <hr></hr>
      <div>
        <h2 className="center-txt">Wishlist <span className="fas fa-heart"></span></h2>
        <p className="center-txt f-m">Checkout the items you wishlisted</p>
      </div>
      <hr></hr>
        <div class="alert primary alert-msg" style={{display:alert.display}}>
            <p>{alert.message}</p>
            <span class="alert-close">&#10540;</span>
        </div>
    <section className="wishlist-container">
      {
      wishlistState && wishlistState.map((item)=>addWishlistCard(item))
      }
    </section>
    </div>
);
}
export{WishlistPage}
