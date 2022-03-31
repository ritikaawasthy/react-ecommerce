import './landing-page.css';
import {clothSlider, mainSlider} from "../../data/carousel/landingCarousel";
import {Carousel} from "../../components/carousel/carousel";
function LandingPage(){
  return(
    <section>
      <section>
        <Carousel slideList={mainSlider} slideCount={1} autoplay={true} autoPlayInterval={4000} />
      </section>
      <section>

      </section>

      <section className="slider-top">
        <h2 className="center-txt fw-reg primary-col">
          <a href="templates/product.html">Clothing</a>
        </h2>
        <Carousel slideList={clothSlider} slideCount={2} autoplay={false}/>
      </section>
        <hr className="primary"></hr>
    </section>
  )
}

export {LandingPage}
