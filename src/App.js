import "./App.css";
import {Carousel, Navbar, Footer} from "./components/index";
import "./styles/styles.css";

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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar isAuthenticated={false}/>
        <Carousel slideList={slideList} slideCount={1} autoplay={true} autoPlayInterval={4000}/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
