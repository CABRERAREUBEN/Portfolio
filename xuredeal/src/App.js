import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserGuide from './pages/UserGuide';
import Authenticate from './pages/Authenticate';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserGuide" element={<UserGuide />} />
          <Route path="/Authenticate" element={<Authenticate />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
