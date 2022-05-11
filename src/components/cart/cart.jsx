import "./cart.css"
import {useCart} from "../../context/cartContext"
import {useWishlist} from "../../context/wishlistContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose,faCircleDot, faIndianRupeeSign, faHeart} from '@fortawesome/free-solid-svg-icons';

function Cart(){
  const {cartState,setCartState, removeFromCart} = useCart()
  const {addToWishlist}= useWishlist()

  const TotalPrice= cartState && cartState.reduce((prev, cartItem)=>(cartItem.sale.onSale)? parseInt(prev)+parseInt(cartItem.sale.salePrice * cartItem.quantity): parseInt(prev)+parseInt(cartItem.price * cartItem.quantity), 0)

  const increaseQuantity=(item)=>setCartState(()=>cartState.map((cartItem)=>(cartItem._id===item._id)? {...cartItem, quantity:cartItem.quantity+1}:{...cartItem}))

  const decreaseQuantity=(item)=>setCartState(()=>cartState.map((cartItem)=>(cartItem._id===item._id)?((cartItem.quantity<=1)?{...cartItem}:{...cartItem, quantity:cartItem.quantity-1}):{...cartItem}))


  return(
    <div className="product-container">
    <section className="grid-two-layout-container">
      <article className="grid-two-layout-left">
        <div className="cart-products-container">
          {
            cartState.map((item)=><div className="card w-xl">
              <div className="card-content card-shadow inline">
                <img className="cart-img" src={item.picture}  alt=""></img>
                <div className="card-content stacked">
                    <h3 className="primary-col f-l fw-li">{item.brand}</h3>
                    <p className="f-s">{item.title}</p>
                  <div className="card-content inline mg-t-xs">
                    <a className="badge badge-text primary-bg primary-light-col f-xs"><i className="fa-solid fa-square-down"></i>Size: {item.size}</a>
                    <a className="badge badge-text primary-bg primary-light-col f-xs">Quantity:{item.quantity}
                    </a>
                     <button onClick={()=>increaseQuantity(item)} className="btn btn-float btn-bordered sm-btn fw-bb">+</button>
                     <button onClick={()=>decreaseQuantity(item)} className="btn btn-float btn-bordered sm-btn fw-bb">-</button>
                  </div>
                  <p><i className="fas fa-check mg-r-s">Delivery by next week</i>
                  </p>

                    {
                      (item.sale.onSale)?<p className="f-m fw-reg mg-t-m"><FontAwesomeIcon className="mg-r-s" icon={faIndianRupeeSign}></FontAwesomeIcon>{item.sale.salePrice * item.quantity}</p>
                  :<p className="f-m fw-reg mg-t-m"><FontAwesomeIcon className="mg-r-s" icon={faIndianRupeeSign}></FontAwesomeIcon>{item.price * item.quantity}
                </p>
                    }
                </div>
                <div className="cart-card-side">
                  <FontAwesomeIcon onClick={()=>removeFromCart(item)} className="fw-li f-l primary-col" icon={faClose}>
                  </FontAwesomeIcon>
                <FontAwesomeIcon className="primary-col white-trans-bg round f-m wishlist-btn end" icon={faHeart} onClick={()=>addToWishlist(item)}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          )
          }
      </div>
     </article>
    <article className="grid-two-layout-right fl-center">
      <div className="container-col fl-space">
        <div className="card card-shadow w-xxl pd-t-l pd-r-l pd-l-l pd-b-l">
          <ul>
            <li> <h3 className="center-txt primary-col">Bill</h3></li>
            <li><p className="primary-col f-m">Price details</p></li>
            {
              cartState.map((cartItem)=><li className="card-content inline"><p> {cartItem.brand} | {cartItem.title} | {cartItem.quantity}</p>
            <p className="end">Rs {(cartItem.sale.onSale)?cartItem.sale.salePrice * cartItem.quantity: cartItem.price * cartItem.quantity}</p>
            </li>)
            }
      <hr></hr>
      <li className="card-content inline fw-reg "><p>Total Cost</p>
      {
        <p className="fw-reg end">
          {TotalPrice}
          </p>
      }
    </li>
      </ul>
      <p className="f-m primary-col">Offers and coupons</p>
          <div className="card w-xxl primary-light-bg">
            <div className="card-content inline fl-center">
              <p className="fw-bb"><FontAwesomeIcon icon={faCircleDot} className="primary-col mg-r-s"></FontAwesomeIcon>Apply Coupon</p>
              <div className="input-container f-s">
                <input type="text" className="input" placeholder=" " value=""></input>
                <label className="input-label fw-li" for="">Coupon Code</label>
              </div>
              <a className="btn btn-bordered primary-col f-s fw-b end" href="#">Submit</a>
            </div>
          </div>
          <a href="#" className="btn primary-bg primary-light-col mg-t-l f-l center-txt">Place Order</a>
        </div>

      </div>
      </article>
    </section>
    </div>
  )
}

export {Cart}
