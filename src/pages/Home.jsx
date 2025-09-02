import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to D S Enterprise
        </h1>
        <p className="text-lg mb-6">
          Precision. Innovation. Global Reach.
        </p>
        <Link
          to="/products"
          className="bg-brand-accent text-black px-6 py-3 rounded-lg font-semibold"
        >
          Explore Our Products
        </Link>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-3">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
          <p className="text-gray-700">
            Serving clients globally with consistent quality and reliability.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Engineering Expertise</h3>
          <p className="text-gray-700">
            Backed by years of technical knowledge and domain experience.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Global Sourcing</h3>
          <p className="text-gray-700">
            Optimized supply chains across multiple continents.
          </p>
        </div>
      </section>
    </div>
  );
}
