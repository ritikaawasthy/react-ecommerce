import {useParams} from "react-router-dom";
import {products} from "../../backend/db/products";
import {Filter} from "../../components/filter/filter";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import "./product-page.css";

function ProductPage(){
  const {categoryName}=useParams();
  const filteredArray=products.filter((item)=>(item.categoryName===categoryName))

  const addProductCard=(item)=>{
    return(<article className="card card-shadow w-s">
      <div className="background">
        <img className="product-img-s" src={item.picture} alt=""></img>
      </div>
      <div className="card-content ">
      <FontAwesomeIcon className="primary-col white-trans-bg round f-m wishlist-btn" icon={faHeart}></FontAwesomeIcon>
      </div>
      <div className="card-content-foot inline">
          <a href="#" className="btn primary mg-b-s mg-l-s center">
            <i className="fas fa-shopping-cart mg-r-s"></i>Add to cart
          </a>
          <div className="card-content stacked end">
            <p className="fas fa-tag end"></p>
            <p className="f-m">1299 Rs</p>
          </div>
      </div>
    </article>);
  }
  return(
    <section className='productPageLayoutContainer'>
      <article className='productPageLayoutSide primary'>
        <Filter></Filter>
      </article>
      <article className='productPageLayoutMain'>
      {filteredArray.map((item)=>addProductCard(item))}
      </article>
    </section>
  );
}
export{ProductPage}
