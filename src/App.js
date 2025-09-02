<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Services from "./pages/Services";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Services from "./pages/Services";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
>>>>>>> 34b7f12b91f78c7853d7a09f710342774e9c71a4
