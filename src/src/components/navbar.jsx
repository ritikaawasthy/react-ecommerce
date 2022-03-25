import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function Navbar(props){
  return(
    <header>
      <nav class="nav">
        <div class="start">
          <h2 class="theme-heading primary-col"><a href="/index.html">Thrift with me</a></h2>
        </div>
        <ul class="list list-inline f-m primary-col fl-center">
          <li class=''>
            <div class="input-container ">
              <input placeholder=" " class="input w-full"></input>
              <label class="input-label f-s">Search</label>
            </div>
          </li>
          <li class='active'><a href="templates/login.html">Login</a></li>
          <li><a href="templates/signup.html">Register</a ></li>
          <li><FontAwesomeIcon href="templates/wishlist.html" icon={faHeart} className="f-m"></FontAwesomeIcon></li>
          <li><FontAwesomeIcon href="templates/wishlist.html" icon={faShoppingCart} className="f-m"></FontAwesomeIcon></li>
        </ul>
      </nav>
    </header>  
  )
}

export {Navbar}
