import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";

import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
