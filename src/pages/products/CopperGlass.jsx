export default function CopperGlass() {
  const items = [
    {
      name: "Hammered Copper Glass",
      image: "/assets/copperglass/hammered.jpg",
      description: "Traditional hammered design with natural copper finish.",
    },
    {
      name: "Plain Copper Glass",
      image: "/assets/copperglass/plain.jpg",
      description: "Smooth polished glass for authentic drinking experience.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Copper Glass</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.name}
            className="border rounded-xl shadow bg-white p-4 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto mb-4 h-40 object-contain"
            />
            <h2 className="text-xl font-semibold text-blue-900">
              {item.name}
            </h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
