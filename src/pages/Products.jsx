<<<<<<< HEAD
const products = [
  { name: "Precision Machined Parts", desc: "High tolerance components for automotive and aerospace." },
  { name: "Cast & Forged Components", desc: "Durable solutions for heavy-duty industries." },
  { name: "Plastic Molded Products", desc: "Injection-molded parts for consumer and industrial use." },
  { name: "Sheet Metal Fabrications", desc: "Custom-built assemblies and enclosures." },
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-brand-dark mb-8">Our Products</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {products.map((p) => (
          <div key={p.name} className="p-6 bg-white shadow rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
=======
const products = [
  { name: "Precision Machined Parts", desc: "High tolerance components for automotive and aerospace." },
  { name: "Cast & Forged Components", desc: "Durable solutions for heavy-duty industries." },
  { name: "Plastic Molded Products", desc: "Injection-molded parts for consumer and industrial use." },
  { name: "Sheet Metal Fabrications", desc: "Custom-built assemblies and enclosures." },
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-brand-dark mb-8">Our Products</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {products.map((p) => (
          <div key={p.name} className="p-6 bg-white shadow rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
>>>>>>> 34b7f12b91f78c7853d7a09f710342774e9c71a4
