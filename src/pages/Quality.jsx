export default function Quality() {
  return (
    <div>
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold">Our Quality Commitment</h1>
        <p className="mt-4 max-w-3xl mx-auto">We maintain the highest global standards for every product and service.</p>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <p className="text-gray-600">
            Placeholder for ISO, IATF, and other certifications that DS Enterprise maintains.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quality Process</h2>
          <p className="text-gray-600">
            Placeholder for quality control process, from supplier audit to product delivery.
          </p>
        </div>
      </section>
    </div>
  );
}
