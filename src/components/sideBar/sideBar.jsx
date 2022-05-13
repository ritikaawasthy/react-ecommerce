function SideBar(){
  return(
    <ul className="list-container list-stacked" >
      <li className="fw-b" ><a href="product.html">Women</a></li>
      <li>
        <ul className="list-container list-stacked" id="sub-menu">Apparel
        <li><a href="product.html">Dress</a></li>
        <li><a href="product.html">T-shirts</a></li>
        <li><a href="product.html">Jeans</a></li>
        <li><a href="product.html">Skirt</a></li>
        </ul>
      </li>
      <li className="fw-b"><a href="product.html">Men</a></li>
      <li>
        <ul className="list-container list-stacked">Clothing
        <li><a href="product.html">T-shirts</a></li>
        <li><a href="product.html">Jeans</a></li>
        </ul>
      </li>
      <li className="fw-b" ><a href="product.html">Accessories</a></li>
      <li className="fw-b"><a href="product.html">Footwear</a></li>
    </ul>
  )
}

export {SideBar}
