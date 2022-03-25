import "./App.css";
// import logo from "./logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SignupPage, LandingPage} from "./pages/index.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
       <Route path="/" element={<LandingPage/>} />
       <Route path="signup" element={<SignupPage />} />
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
