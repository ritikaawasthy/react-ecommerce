import {SignupPage, LoginPage, LandingPage, ProductPage, CartPage, WishlistPage} from "./pages/index.js";
import {Navbar, Footer} from "./components/index";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
            <Route path="/product/category/:categoryName" element={<ProductPage />}></Route>
            <Route path="/product/gender/:gender" element={<ProductPage />}></Route>
            <Route path="/wishlist" element={<WishlistPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
