import './landing-page.css';
import {clothSlider, mainSlider, accessoriesSlider} from "../../data/carousel/landingCarousel";
import {Carousel} from "../../components/carousel/carousel";
import {categories} from "../../backend/db/categories";
import { Link } from "react-router-dom";



function LandingPage() {
  return (<section>
    <section>
      <Carousel slideList={mainSlider} slideCount={1} autoplay={true} autoPlayInterval={4000}/>
    </section>
    <h2 className="center-txt fw-reg primary-col landing-head">
      Categories
    </h2>
    <section className="container fl-center">
      {
        categories.map((item) =><Link to={`product/category/${item.categoryName}`}>< div key = {
          item._id
        }className = 'card card-shadow w-xs landing-card '>
        <img className='landing-card-img' src={item.picture}></img>
        <div className="card-content stacked fl-center">
          <p className='f-m'>{item.categoryName}</p>
        </div>
      </div>
    </Link>
    )
      }
    </section>

  <section className="slider-top">
    <h2 className="center-txt fw-reg primary-col">
      <Link to="/product" className="head">Clothing</Link>
    </h2>
    <Carousel slideList={clothSlider} slideCount={2} autoplay={false}/>
  </section>

  <section className="slider-top">
    <h2 className="center-txt fw-reg primary-col">
      <a className="landing-head">Footwear</a>
    </h2>
    <Carousel slideList={accessoriesSlider} slideCount={3} autoplay={false}/>
  </section>

  <section className="container-col">
    <div className="heroSection">
      <h2>About Us</h2>
      <section className="grid-two-layout-container">
        <article className='grid-two-layout-left primary heroPara'>
          <h3>Why Thrifting?</h3>
          <p>Climate change is already wreaking havoc on the earth, as evidenced by the year 2020. The fast-fashion business is a big part of this, as not only are chemicals used to make the clothes and accessories but many companies are also known for exploiting their workers. Fast fashion also creates a vicious cycle, a fashionable but inexpensive outfit fades or becomes out of style more quickly, making customers buy more and more. Well, that's where Thrifting comes into play, giving a new home to hardly used or unused clothes so they don’t end up in landfills. Instagram Thrift stores are just an online platform for sustainable fashion.</p>
          <h3>So, What is thrifting?</h3>
          <p>Well, thrifting is the of process reusing pre-owned and upcycled or thrifted items of clothing and accessories. In other words means shopping at a thrift store, garage sale, or flea market for gently used products at a reduced price.
            India is no stranger to thrift shopping; we may not have large stores, but there are always small pop-ups where you can find something of your liking. Thrifted objects have been cherished by a prior owner, but they are usually in decent condition and have enough life still in them to be useful to a new owner. Instagram thrift stores exploded in popularity in 2020, and it was a smash for all the right reasons.</p>
        </article>
        <article className='grid-two-layout-Right primary heroPara'>
          <h3>Our Vision</h3>
          <p>Every week, these Instagram thrift retailers drop their pre-loved items, which are always in high demand. The nicest thing about these shops is how numerous they are. You can always go out and look for a thrift store that meets your tastes. These shops are run by small business owners who choose good pieces for our wardrobes and ensure that all of our sustainable demands are met, However there exists almost no platform that brings all of this at one place. The thrift store aims are solving this issue by allowing user to buy/sell their products. </p>
          <h4>What does this solve?</h4>
          <p>1. It Promotes reusing of cloths which when done on a large scale ould make a great impact as cloth making process highly damage enviornmnet and exploit its resources    </p>
        </article>
      </section>
    </div>
  </section>

  <hr className="primary"></hr>
  </section>
)
}
export {
  LandingPage
}
