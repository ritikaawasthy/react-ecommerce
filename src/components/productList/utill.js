import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {useWishlist} from "../../context/wishlistContext"
import {useCart} from "../../context/cartContext"
import {useState} from "react"

const addProductCard=(item)=>{
  const { wishlistState,setWishlistState}= useWishlist();
  const { cartState, setCartState }= useCart();
  const [alert, setAlert]= useState({
    message:"",
    display: "none"
  })

  const addToWishlist=(item)=>{
    if(!wishlistState.includes(item)){
      setWishlistState([...wishlistState, item])
    }
  }

  const addToCart=(item)=>{
    if(!cartState.includes(item)){
      item.quantity=1
      setCartState([...cartState, item ])
    }else{
      let tempCartState=cartState.filter((cartItem)=>cartItem._id!==item._id)
      item.quantity+=1
      tempCartState.push(item)
      setCartState(tempCartState)
      setAlert({message: "Item already in Cart, Increased Quantity by 1", display: "flex"})
      setTimeout(()=>setAlert({...alert,display:"none"}),4000);
      tempCartState=[]
    }
  }
  if(item.sale.onSale){
    return(
      <section>
        <div class="alert primary alert-msg" style={{display:alert.display}}>
            <p>{alert.message}</p>
            <span class="alert-close">&#10540;</span>
        </div>
      <article className="card card-shadow w-s" key={item._id}>
        <div className="background">
          <img className="product-img-s" src={item.picture} alt="product"></img>
        </div>
        <div className="card-content ">
          <FontAwesomeIcon className="primary-col white-trans-bg round f-m wishlist-btn" icon={faHeart} onClick={()=>addToWishlist(item)}></FontAwesomeIcon>
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
              <a className="btn primary mg-b-s mg-l-s center" onClick={()=>addToCart(item)}>
                <FontAwesomeIcon icon={faShoppingCart} className="mg-r-s"></FontAwesomeIcon>Add to cart
              </a>
          </div>
        </div>
        </article>
        </section>
    )
  }else{
    return(<article className="card card-shadow w-s" key={item._id}>
      <div className="background">
        <img className="product-img-s" src={item.picture} alt=""></img>
      </div>
      <div className="card-content ">
      <FontAwesomeIcon className="primary-col white-trans-bg round f-m wishlist-btn" icon={faHeart} onClick={()=>addToWishlist(item)}></FontAwesomeIcon>
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
  }

}


export{addProductCard}
