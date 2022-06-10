import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/namer-community" exact element={<Home />} />
          <Route path="/mission" exact element={<Mission />} />
          <Route path="/about" exact element={<About />} />
          <Route path="*" exact element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
