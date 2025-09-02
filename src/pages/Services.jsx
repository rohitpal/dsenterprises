const services = [
  { name: "Supplier Development", desc: "Auditing and capability enhancement for long-term growth." },
  { name: "Global Sourcing", desc: "Cost-optimized procurement strategies across regions." },
  { name: "Quality Assurance", desc: "Stringent quality checks aligned with ISO standards." },
  { name: "Engineering Support", desc: "Design validation, prototyping, and manufacturing support." },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-brand-dark mb-8">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.name} className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
