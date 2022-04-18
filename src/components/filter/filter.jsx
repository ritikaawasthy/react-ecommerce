import {categories} from "../../backend/db/categories";
import "./filter.css";

function Filter(props){
  const categoryName= props.filterCategory;
  const addFilterCategories=(item)=>{
    return (
    <div className="input-container " key={item._id}>
      <input placeholder=" "  type="checkbox" name={item.categoryName} className="input"></input>
      <label className="f-s">{item.categoryName}</label>
    </div>
  )
  }
 return (
   <ul className="list-container list-stacked">
     <div className="container">
       <a className="fw-b">Filters</a>
       <i className="end">Clear</i>
     </div>

     <p className="fw-b">By Price</p>
     <form>
       <div className="input-container  ">
         <input placeholder=" "  type="radio" name="filter-price" className="input"></input>
         <label className="f-s">High - Low</label>
         </div>
         <div className="input-container  ">
         <input placeholder=" "  type="radio" name="filter-price" className="input"></input>
         <label className="f-s">Low - High</label>
       </div>
     </form>

     <p className="fw-b">By Categories</p>
     <form >
      {categories.map((item)=>addFilterCategories(item))}
     </form>

     <p className="fw-b">By Gender</p>
     <form>
       <div className="input-container  ">
         <input placeholder=" "  type="radio" name="filter-price" className="input"></input>
         <label className="f-s">Women</label>
        </div>
        <div className="input-container  ">
         <input placeholder=" "  type="radio" name="filter-price" className="input"></input>
         <label className="f-s">Men</label>
       </div>
     </form>

     <p className="fw-b">By Rating</p>
     <form onClick={((event)=>{event.preventDefault(); console.log(event.target.title)})} className="rate">
      <div class="rate">
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
     </form>
   </ul>

 )
}

export {Filter}
