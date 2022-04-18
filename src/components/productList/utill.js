import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart,faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const addProductCard=(item)=>{
  if(item.sale.onSale){
    return(
      <article className="card card-shadow w-s" key={item._id}>
        <div className="background">
          <img className="product-img-s" src={item.picture} alt="product"></img>
        </div>
        <div className="card-content ">
          <FontAwesomeIcon className="primary-col white-trans-bg round f-m wishlist-btn" icon={faHeart}></FontAwesomeIcon>
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
              <a href="#" className="btn primary mg-b-s mg-l-s center">
                <FontAwesomeIcon icon={faShoppingCart} className="mg-r-s"></FontAwesomeIcon>Add to cart
              </a>
          </div>

        </div>
        </article>
    )
  }else{
    return(<article className="card card-shadow w-s" key={item._id}>
      <div className="background">
        <img className="product-img-s" src={item.picture} alt=""></img>
      </div>
      <div className="card-content ">
      <FontAwesomeIcon className="primary-col white-trans-bg round f-m wishlist-btn" icon={faHeart}></FontAwesomeIcon>
      </div>
      <div className="card-content-foot fl-space inline">
          <p className="f-m center mg-l-m">₹ {item.price}</p>
          <div className="card-content stacked">
              <a href="#" className="btn primary mg-b-s mg-l-s center">
                <FontAwesomeIcon icon={faShoppingCart} className="mg-r-s"></FontAwesomeIcon>Add to cart
              </a>
          </div>
      </div>
    </article>);
  }

}


export{addProductCard}
