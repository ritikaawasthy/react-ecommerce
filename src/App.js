import "./App.css";
// import {Carousel, Navbar, Footer, Filter, SideBar, Cart, Wishlist} from "./components/index";
import {SignupPage} from "./pages/index.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
