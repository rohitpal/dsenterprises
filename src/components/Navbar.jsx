import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      name: "Kitchen Utensils",
      path: "/products/kitchen-utensils",
      products: [
        { name: "Stainless Steel Spatula", path: "/products/kitchen-utensils/spatula" },
        { name: "Non-stick Frying Pan", path: "/products/kitchen-utensils/frying-pan" },
      ],
    },
    {
      name: "Water Bottle",
      path: "/products/water-bottle",
      products: [
        { name: "Insulated Steel Bottle", path: "/products/water-bottle/steel-bottle" },
        { name: "Plastic Sports Bottle", path: "/products/water-bottle/sports-bottle" },
      ],
    },
    {
      name: "Coffee Mug",
      path: "/products/coffee-mug",
      products: [
        { name: "Ceramic Mug", path: "/products/coffee-mug/ceramic-mug" },
        { name: "Travel Mug", path: "/products/coffee-mug/travel-mug" },
      ],
    },
    {
      name: "Copper Glass",
      path: "/products/copper-glass",
      products: [
        { name: "Hammered Copper Glass", path: "/products/copper-glass/hammered" },
        { name: "Plain Copper Glass", path: "/products/copper-glass/plain" },
      ],
    },
    {
      name: "Cutlery",
      path: "/products/cutlery",
      products: [
        { name: "Fork", path: "/products/cutlery/fork" },
        { name: "Knife", path: "/products/cutlery/knife" },
      ],
    },
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">DS Enterprises</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 relative">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <Link to="/products"  className="hover:text-yellow-400">Products ▾</Link>
            {openDropdown && (
              <div className="absolute top-full right-0 w-[700px] bg-white text-black shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6 z-50 animate-slideDown">
                {categories.map((cat) => (
                  <div key={cat.name}>
                    <Link
                      to={cat.path}
                      className="font-semibold text-blue-900 hover:text-yellow-600"
                    >
                      {cat.name}
                    </Link>
                    <ul className="mt-2 space-y-1">
                      {cat.products.map((p) => (
                        <li key={p.name}>
                          <Link
                            to={p.path}
                            className="text-gray-700 hover:text-blue-700 text-sm"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/industries" className="hover:text-yellow-400">Industries</Link>
          <Link to="/services" className="hover:text-yellow-400">Services</Link>
          <Link to="/quality" className="hover:text-yellow-400">Quality</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white text-black shadow-lg p-6 space-y-4 animate-slideDown">
          <Link to="/" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>About</Link>

          {/* Mobile Products Accordion */}
          <div>
            <button
              className="w-full text-left font-semibold hover:text-blue-700 flex justify-between items-center"
              onClick={() => setExpandedCategory(expandedCategory === "products" ? null : "products")}
            >
              Products ▾
            </button>
            {expandedCategory === "products" && (
              <div className="pl-4 mt-2 space-y-3">
                {categories.map((cat) => (
                  <div key={cat.name}>
                    <Link
                      to={cat.path}
                      className="font-medium text-blue-900 hover:text-yellow-600 block"
                      onClick={() => setMobileOpen(false)}
                    >
                      {cat.name}
                    </Link>
                    <ul className="ml-3 mt-1 space-y-1">
                      {cat.products.map((p) => (
                        <li key={p.name}>
                          <Link
                            to={p.path}
                            className="text-gray-700 hover:text-blue-700 text-sm block"
                            onClick={() => setMobileOpen(false)}
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/industries" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Industries</Link>
          <Link to="/services" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/quality" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Quality</Link>
          <Link to="/contact" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
