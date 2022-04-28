import {categories} from "../../backend/db/categories";
import "./filter.css";
import {useProduct} from "../../context/productContext";
import {useState} from "react";

function Filter(props){
  const {productState, productDispatch} = useProduct();
  // const {filterState, setFilterState}= useState({
  //   price: {
  //     high: "",
  //     low: ""
  //   },
  //   category: {
  //     topwear: "",
  //     bottomwear: "",
  //     footwear: "",
  //     accessory: ""
  //   },
  //   gender: {
  //     men: "",
  //     woman: ""
  //   },
  //   rating: ""
  // });

  const filterHandler=(event)=>{
    event.preventDefault()
    console.log(event.target.name,event.target.value)
    switch(event.target.name){
      case "price":
      return(
        productDispatch({type: event.target.value})
      )
    }


    // productDispatch({type:event.target.value})
  }

  const addFilterCategories=(item)=>{
    return (
    <div className="input-container " key={item._id}>
      <input placeholder=" "  type="checkbox" name="category" className="input" value={item.categoryName}></input>
      <label className="f-s">{item.categoryName}</label>
    </div>
  )
  }
 return (
   <form onChange={(event)=>filterHandler(event)}>
   <ul className="list-container list-stacked">
     <div className="container">
       <a className="fw-b">Filters</a>
       <i className="end">Clear</i>
     </div>

     <p className="fw-b">By Price</p>
     <div>
       <div className="input-container  ">
         <input placeholder=" "  type="radio" name="price" className="input" value="SORT_PRICE_HIGH" checked={productState.filter.price.SORT_PRICE_HIGH}></input>
         <label className="f-s">High - Low</label>
         </div>
         <div className="input-container  ">
         <input placeholder=" "  type="radio" name="price" className="input" value="SORT_PRICE_LOW" checked={productState.filter.price.SORT_PRICE_LOW}></input>
         <label className="f-s">Low - High</label>
       </div>
     </div>

     <p className="fw-b">By Categories</p>
    <div>
      {categories.map((item)=>addFilterCategories(item))}
    </div>

     <p className="fw-b">By Gender</p>
       <div className="input-container  ">
         <input placeholder=" "  type="radio" name="gender" className="input" value="Women"></input>
         <label className="f-s">Women</label>
        </div>
        <div className="input-container  ">
         <input placeholder=" "  type="radio" name="gender" className="input" value="Men"></input>
         <label className="f-s">Men</label>
       </div>

     <p className="fw-b">By Rating</p>
     <div>
       <div className="rate">
       <input type="radio" id="star5" name="rate" value="5" key="5" />
       <label htmlFor="star5" title="5">5 stars</label>
       <input type="radio" id="star4" name="rate" value="4" key="4" />
       <label htmlFor="star4" title="4">4 stars</label>
       <input type="radio" id="star3"  name="rate" value="3" key="3"  />
       <label htmlFor="star3" title="3">3 stars</label>
       <input type="radio" id="star2"  name="rate" value="2" key="2" />
       <label htmlFor="star2" title="2">2 stars</label>
       <input type="radio" id="star1" name="rate" value="1" key="1" />
       <label htmlFor="star1" title="1">1 star</label>
          </div>
     </div>
   </ul>
</form>
 )
}

export {Filter}
