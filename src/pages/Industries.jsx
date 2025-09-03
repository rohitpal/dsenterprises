export default function Industries() {
  return (
    <div>
      <section className="bg-brand-dark text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Industries We Serve</h1>
        <p className="mt-4 max-w-2xl mx-auto">Partnering with diverse industries worldwide.</p>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8">
        {[
          "Automotive & Transportation",
          "Industrial Machinery",
          "Energy & Power",
          "Construction & Infrastructure",
          "Aerospace",
          "Consumer Products",
        ].map((industry) => (
          <div key={industry} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{industry}</h3>
            <p className="mt-2 text-gray-600">
              Placeholder description for {industry}. Replace with case studies or client examples.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
