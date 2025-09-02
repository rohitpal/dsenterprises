import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import QuoteDialog from "./QuoteDialog";

const nav = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/industries", label: "Industries" },
  { path: "/services", label: "Services" },
  { path: "/quality", label: "Quality" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl">
          D S <span className="text-gray-300">Enterprise</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((n) => (
            <Link key={n.path} to={n.path} className="hover:text-brand-accent">
              {n.label}
            </Link>
          ))}
          <QuoteDialog />
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-brand-dark border-t">
          {nav.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              onClick={() => setOpen(false)}
              className="block py-2 px-4 hover:bg-brand-accent hover:text-black"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
