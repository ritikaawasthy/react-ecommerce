import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';
import navLogo from '../../data/logo/navLogo.png';
import "./nav.css";
import {useWishlist} from "../../context/wishlistContext"
import {useCart} from "../../context/cartContext"
import {Link} from "react-router-dom"
function Navbar(){
  const {wishlistState}= useWishlist();
  const {cartState}= useCart();

  return(
    <header>
      <nav className="nav">
        <div className="start">
          <img src={navLogo} className="icon" width={250} alt="logo"></img>
        </div>
        <ul className="list list-inline f-m primary-col fl-center">
          <li >
            <div className="input-container ">
              <input placeholder=" " className="input w-l"></input>
              <label className="input-label fw-li f-m">Search</label>
            </div>
          </li>

          <li>
            <Link to='/wishlist'>
            <div className="badge-cont">
            <div className="badge primary">{wishlistState && wishlistState.length}</div>
            <div className="badge-icon">
                <FontAwesomeIcon icon={faHeart} className="f-l"></FontAwesomeIcon>
            </div>
            </div>
           </Link>
          </li>
          <li>
            <Link to='/cart'>
            <div className="badge-cont">
              <div className="badge primary">{cartState && cartState.length}</div>
              <div className="badge-icon">
                  <FontAwesomeIcon icon={faShoppingCart} className="f-l"></FontAwesomeIcon>
              </div>
            </div>
            </Link>
          </li>
          <li ><FontAwesomeIcon href="templates/wishlist.html" icon={faUser} className="f-l"></FontAwesomeIcon></li>
        </ul>
      </nav>
    </header>
  )
}


export {Navbar}
