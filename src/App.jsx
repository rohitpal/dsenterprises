import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";

// Product category pages
import KitchenUtensils from "./pages/products/KitchenUtensils";
import WaterBottle from "./pages/products/WaterBottle";
import CoffeeMug from "./pages/products/CoffeeMug";
import CopperGlass from "./pages/products/CopperGlass";
import Cutlery from "./pages/products/Cutlery";

import SpatulaDetail from "./pages/products/details/SpatulaDetail";
import FryingPanDetail from "./pages/products/details/FryingPanDetail";
import SportsBottleDetail from "./pages/products/details/SportsBottleDetail";
import SteelBottleDetail from "./pages/products/details/SteelBottleDetail";
import CeramicMugDetail from "./pages/products/details/CeramicMugDetail";
import TravelMugDetail from "./pages/products/details/TravelMugDetail";
import HammeredGlassDetail from "./pages/products/details/HammeredGlassDetail";
import PlainGlassDetail from "./pages/products/details/PlainGlassDetail";
import ForkDetail from "./pages/products/details/ForkDetail";
import KnifeDetail from "./pages/products/details/KnifeDetail";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/kitchen-utensils" element={<KitchenUtensils />} />
          <Route path="/products/kitchen-utensils/spatula" element={<SpatulaDetail />} />
          <Route path="/products/kitchen-utensils/frying-pan" element={<FryingPanDetail />} />
          <Route path="/products/water-bottle" element={<WaterBottle />} />
          <Route path="/products/water-bottle/sports-bottle" element={<SportsBottleDetail />} />
          <Route path="/products/water-bottle/steel-bottle" element={<SteelBottleDetail />} />
          <Route path="/products/coffee-mug" element={<CoffeeMug />} />
          <Route path="/products/coffee-mug/ceramic-mug" element={<CeramicMugDetail />} />
          <Route path="/products/coffee-mug/travel-mug" element={<TravelMugDetail />} />
          <Route path="/products/copper-glass" element={<CopperGlass />} />
          <Route path="/products/copper-glass/hammered-glass" element={<HammeredGlassDetail />} />
          <Route path="/products/copper-glass/plain-glass" element={<PlainGlassDetail />} />
          <Route path="/products/cutlery" element={<Cutlery />} />
          <Route path="/products/cutlery/fork" element={<ForkDetail />} />
          <Route path="/products/cutlery/knife" element={<KnifeDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
