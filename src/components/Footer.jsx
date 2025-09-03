import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-brand-accent">DS Enterprises</h2>
          <p className="mt-4 text-gray-400">
            Trusted partner in global sourcing, engineering solutions, and quality assurance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-brand-accent">About Us</Link></li>
            <li><Link to="/products" className="hover:text-brand-accent">Products</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent">Services</Link></li>
            <li><Link to="/industries" className="hover:text-brand-accent">Industries</Link></li>
            <li><Link to="/quality" className="hover:text-brand-accent">Quality</Link></li>
            <li><Link to="/contact" className="hover:text-brand-accent">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@dsenterprises.com</p>
          <p className="text-gray-400">Phone: +91-123-456-7890</p>
          <p className="text-gray-400">Location: Pune, India</p>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} DS Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
