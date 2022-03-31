function Cart(){
  return(
    <div className="product-container">
    <section className="grid-two-layout-container">
      <article className="grid-two-layout-left">
        <div className="container fl-end">
       <div className="card w-xxl">
         <div className="card-content card-shadow inline">
           <img className="product-img-s" src="/media/products/women/top/2.webp" alt=""></img>
           <div className="card-content stacked">
               <h3 className="primary-col">Mango</h3>
               <p className="f-m">Blue casual top</p>
               <p className="fw-light">Sold by: xyz traders</p>
             <div className="card-content inline mg-t-l">
               <a href="#" className="badge badge-text primary-bg primary-light-col f-s"><i className="fa-solid fa-square-down"></i>Size: XS</a>
               <a href="#" className="badge badge-text primary-bg primary-light-col f-s"><i className="fa-solid fa-square-down"></i>Quantity: 1</a>
             </div>
             <p><i className="fas fa-check mg-r-s"></i>Delivery before 24th february </p>
             <p className="f-l end mg-t-l">675 Rs</p>
           </div>
           <i className="fas fa-close f-l end"></i>
         </div>
       </div>
      </div>
     </article>
    <article className="grid-two-layout-right fl-center">
      <div className="container-col fl-space">
        <div className="card card-shadow w-xxl pd-t-l pd-r-l pd-l-l pd-b-l">

          <ul>
            <li> <h3 className="center-txt primary-col">Bill</h3></li>
            <li><p className="f-m primary-col">Price details:</p></li>
            <li className="card-content inline"><p>Total MRP</p>
            <p className="end">Rs 8871</p>
          </li>
          <li className="card-content inline "><p>Total MRP</p>
          <p className="end">Rs 8871</p>
        </li>
        <li className="card-content inline "><p>Total MRP</p>
        <p className="end">Rs 8871</p>
      </li>
      <hr></hr>
      <li className="card-content inline "><p>Total MRP</p>
      <p className="end">Rs 8871</p>
    </li>
      </ul>

      <p className="f-m primary-col">Offers and coupons</p>
          <div className="card w-xxl primary-light-bg">
            <div className="card-content inline fl-center">
              <p><i className="fas fa-tag primary-col mg-r-s"></i>Apply Coupon</p>
              <div className="input-container f-s">
                <input type="text" className="input" placeholder=" " value=""></input>
                <label className="input-label fw-reg" for="">Coupon Code</label>
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
