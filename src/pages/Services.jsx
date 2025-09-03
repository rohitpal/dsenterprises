export default function Services() {
  return (
    <div>
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto">Comprehensive sourcing and support services to power your business.</p>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        {[
          { title: "Global Sourcing", desc: "Identify and procure best-in-class suppliers worldwide." },
          { title: "Quality Inspection", desc: "Ensure rigorous inspection and adherence to international standards." },
          { title: "Supply Chain", desc: "Seamless logistics, packaging, and delivery to your doorstep." },
        ].map((service) => (
          <div key={service.title} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
