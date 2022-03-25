import "../../styles/styles.css"
import "./landing-page.css";
import {Navbar} from "../../components/navbar"
import {Footer} from "../../components/footer"
import {Carousel} from "../../components/carousel";

export default function LandingPage() {
  const slideList = [
    {
      id: 0,
      imgSrc: "https://picsum.photos/id/237/800/400",
      caption: "This is an initial caption "
    }, {
      id: 1,
      imgSrc: "https://picsum.photos/id/234/800/400",
      caption: "This is a 2 caption "
    }, {
      id: 2,
      imgSrc: "https://picsum.photos/id/235/800/400",
      caption: "This is a 3 caption "
    }
  ];

  const clothSlider = [
    {
      id: 0,
      imgSrcLeft: "https://picsum.photos/id/337/400/600",
      imgSrcRight: "https://picsum.photos/id/137/400/600",
      caption: "This is an initial caption "
    }, {
      id: 1,
      imgSrcLeft: "https://picsum.photos/id/217/400/600",
      imgSrcRight: "https://picsum.photos/id/227/400/600",
      caption: "This is an initial caption "
    }
  ]

  const accessoriesSlider = [
    {
      id: 0,
      imgSrcLeft: "https://picsum.photos/id/337/400/600",
      imgSrcCenter: "https://picsum.photos/id/387/400/600",
      imgSrcRight: "https://picsum.photos/id/137/400/600",
      caption: "This is an initial caption "
    }, {
      id: 1,
      imgSrcLeft: "https://picsum.photos/id/37/400/600",
      imgSrcCenter: "https://picsum.photos/id/17/400/600",
      imgSrcRight: "https://picsum.photos/id/7/400/600",
      caption: "This is an initial caption "
    }, {
      id: 2,
      imgSrcLeft: "https://picsum.photos/id/38/400/600",
      imgSrcCenter: "https://picsum.photos/id/387/400/600",
      imgSrcRight: "https://picsum.photos/id/137/400/600",
      caption: "This is an initial caption "
    }
  ]
  return (
    <div>
  <header>
    <Navbar/>
  </header>
  <section>
    <section>
      <Carousel slideList={slideList} slideCount={1} autoplay={true} autoPlayInterval={4000}/>
    </section>

    <section className="slider-top">
      <h2 className="center-txt fw-reg primary-col">
        <a href="templates/product.html">Clothing</a>
      </h2>
      <Carousel slideList={clothSlider} slideCount={2} autoplay={false}/>
    </section>

    <section className="slider-mid">
      <h2 className="center-txt fw-reg primary-col">
        <a href="templates/product.html">Accessories</a>
      </h2>
      <Carousel slideList={accessoriesSlider} slideCount={3} autoplay={true} autoPlayInterval={6000}/>
    </section>
  </section>
  <hr className="primary"></hr>
  <Footer/>
  </div>

)
}
