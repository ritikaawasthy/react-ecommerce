import {SignupPage, LoginPage} from "./pages/index.js";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
