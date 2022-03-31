function Filter(){
 return (

   <ul className="list-container list-stacked primary">
     <div className="container">
       <a className="fw-b">Filters</a>
       <i className="end">Clear</i>
     </div>
     <p className="fw-b">Price</p>
     <form>
       <div className="input-container  ">
         <input placeholder=" "  type="radio" name="filter-price" className="input"></input>
         <label className="f-s">High - Low</label>
         <input placeholder=" "  type="radio" name="filter-price" className="input"></input>
         <label className="f-s">Low - High</label>
       </div>
     </form>

     <p className="fw-b">Categories</p>
     <form >
       <div className="input-container ">
         <p className="fw-reg">Gender</p>
         <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
         <label className="f-s">Women</label>
         <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
         <label className="f-s">Men</label>
       </div>
       <div className="input-container ">
         <p className="fw-reg">Apparel</p>
         <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
         <label className="f-s">Dress</label>
         <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
         <label className="f-s">T-shirts</label>
         <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
         <label className="f-s">Jeans</label>
         <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
         <label className="f-s">Jackets</label>
       </div>
       <div className="input-container ">
         <p className="fw-reg">Accessories</p>
         <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
         <label className="f-s">Shoes</label>
         <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
         <label className="f-s">Bags</label>
       </div>
     </form>

     <p className="fw-b">Rating</p>
     <form>
       <div className="input-container ">
         <input placeholder=" "  type="range" min={1} max={5} name="filter-price" className="input secondary-col"></input>
       </div>
     </form>
   </ul>
  
 )
}

export {Filter}
