const industries = [
  { sector: "Automotive", desc: "Supplying critical parts for vehicles worldwide." },
  { sector: "Aerospace", desc: "Precision engineering for aviation and defense." },
  { sector: "Industrial Machinery", desc: "Custom solutions for equipment manufacturers." },
  { sector: "Consumer Products", desc: "Reliable sourcing for everyday goods." },
];

export default function Industries() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-brand-dark mb-8">Industries We Serve</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {industries.map((i) => (
          <div key={i.sector} className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">{i.sector}</h3>
            <p className="text-gray-700">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
