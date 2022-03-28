import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';
import navLogo from '../../data/logo/navLogo.png';
import "./nav.css";
function Navbar(props){


  return(
    <header>
      <nav class="nav">
        <div class="start">
          <img src={navLogo} className="icon" width={250} alt="logo"></img>
        </div>
        <ul class="list list-inline f-m primary-col fl-center">
          <li class=''>
            <div class="input-container ">
              <input placeholder=" " class="input w-l"></input>
              <label className="input-label fw-li f-m">Search</label>
            </div>
          </li>

          <li><FontAwesomeIcon href="templates/wishlist.html" icon={faHeart} className="f-l"></FontAwesomeIcon></li>
          <li><FontAwesomeIcon href="templates/wishlist.html" icon={faShoppingCart} className="f-l"></FontAwesomeIcon></li>
          <li ><FontAwesomeIcon href="templates/wishlist.html" icon={faUser} className="f-l"></FontAwesomeIcon></li>
        </ul>
      </nav>
    </header>
  )
}


export {Navbar}
