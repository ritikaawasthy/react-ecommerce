import {SignupPage, LoginPage, LandingPage} from "./pages/index.js";
import {Navbar} from "./components/navigation/nav";
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
        </Routes>
    </div>
  );
}

export default App;
