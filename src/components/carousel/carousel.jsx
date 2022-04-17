import {
  useEffect,
  useState
}
from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

function Carousel(props) {
  const slideList = props.slideList;
  const lastImgInd = slideList.length - 1;
  const slideCount = props.slideCount;
  const autoPlayInterval = props.autoPlayInterval;
  const [slide, setSlide] = useState(slideList[0]);

  function slideBack() {
    if (slide.id !== 0) {
      return setSlide(() => slideList[slide.id - 1]);
    } else {
      return setSlide(() => slideList[lastImgInd]);
    }
  }

  function slideForward() {
    if (slide.id !== lastImgInd) {
      return setSlide(() => slideList[slide.id + 1]);
    } else {
      return setSlide(() => slideList[0]);
    }
  }

  useEffect(()=>{
    if(props.autoplay){
      const intervalId = setInterval(() => {
        slideForward();
      }, autoPlayInterval);
      return() => clearInterval(intervalId);
    }
  },[slide]);


  switch (slideCount) {
    case 1:
      return (<section>
        <article className="container fl-center">
          <div className="card">
            <div className="background">
              <img src={slide.imgSrc} alt="" id="landing-img" className="background slider-img"></img>
            </div>
            <div className="card-content inline center-top">
              <p className="primary-col white-trans-bg fw-b f-xxl start">Women Store
              </p>
              <p className="primary-col white-trans-bg fw-b f-xxl end">Men Store
              </p>
            </div>
            <div className="card-content inline fl-center">
              <FontAwesomeIcon icon={faAnglesLeft} className="card-icon round left f-l" fixedWidth="fixedWidth" onClick={() => slideBack()}/>
              <div className="card-content white-trans-bg stacked">
                <p>{slide.caption}</p>
              </div>
              <FontAwesomeIcon icon={faAnglesRight} className="card-icon round right f-l" fixedWidth="fixedWidth" onClick={() => slideForward()}/>
            </div>
          </div>
        </article>
      </section>);

    case 2:
      return (
        <section className="grid-two-layout-container">
        <div className="container fl-end">
          <article className="grid-two-layout-left">
            <div className="card w-m">
              <img src={slide.imgSrcLeft} alt="" className="background slider-img"></img>
              <div className="card-content stacked">
                <h3 className="fw-li">
                  <a href="templates/product.html">Women</a>
                </h3>
                <FontAwesomeIcon icon={faAnglesLeft} className="card-icon round left f-l" fixedWidth="fixedWidth" onClick={() => slideBack()}/>
                <p>1920</p>
              </div>
            </div>
          </article>
        </div>
        <div className="container fl-start">
          <article className="grid-two-layout-right">
            <div className="card w-m">
              <img src={slide.imgSrcRight} alt="" className="background"></img>
              <div className="card-content stacked end">
                <h3 className="fw-li">
                  <a href="templates/product.html">Men</a>
                </h3>
                <FontAwesomeIcon icon={faAnglesRight} className="card-icon round left f-l" fixedWidth="fixedWidth" onClick={() => slideForward()}/>
                <p>1920</p>
              </div>
            </div>
          </article>
        </div>
      </section>);

    case 3:
      return (<section className="grid-three-layout-container">
        <div className="container fl-end">
          <article className="grid-three-layout-left">
            <div className="card w-m">
              <img src={slide.imgSrcLeft} alt="" className="background"></img>
              <div className="card-content stacked">
                <h3 className="fw-li">
                  <a href="templates/product.html">Men</a>
                </h3>
                <FontAwesomeIcon icon={faAnglesLeft} className="card-icon round left f-l" fixedWidth="fixedWidth" onClick={() => slideBack()}/>
                <p>1920</p>
              </div>
            </div>
          </article>
        </div>

        <div className="container fl-center">
          <article className="grid-three-layout-center">
            <div className="card w-m">
              <img src={slide.imgSrcCenter} alt="" className="background"></img>
              <div className="card-content stacked center">
                <h3 className="fw-li">
                  <a href="templates/product.html">Men</a>
                </h3>
                <p>1920</p>
              </div>
            </div>
          </article>
        </div>

        <div className="container fl-start">
          <article className="grid-three-layout-right">
            <div className="card w-m">
              <img src={slide.imgSrcRight} alt="" className="background"></img>
              <div className="card-content stacked end">
                <h3 className="fw-li">
                  <a href="templates/product.html">Men</a>
                </h3>
                <FontAwesomeIcon icon={faAnglesRight} className="card-icon round right f-l" fixedWidth="fixedWidth" onClick={() => slideForward()}/>
                <p>1920</p>
              </div>
            </div>
          </article>
        </div>
      </section>);

  }

}

export {
  Carousel
};
