export default function Home() {
  return (
    <div>
      <section className="bg-brand-dark text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to DS Enterprises</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Delivering engineering excellence, sourcing solutions, and quality assurance worldwide.
        </p>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold">Products</h3>
          <p className="text-gray-600 mt-2">High-quality industrial products with precision engineering.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Services</h3>
          <p className="text-gray-600 mt-2">Reliable sourcing, quality inspection, and logistics support.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Industries</h3>
          <p className="text-gray-600 mt-2">Serving automotive, manufacturing, energy, and more.</p>
        </div>
      </section>
    </div>
  );
}
