export default function CoffeeMug() {
  const items = [
    {
      name: "Ceramic Coffee Mug",
      image: "/assets/coffeemug/ceramic.jpg",
      description: "Classic ceramic mug, perfect for everyday coffee and tea.",
    },
    {
      name: "Travel Coffee Mug",
      image: "/assets/coffeemug/travel.jpg",
      description: "Insulated mug with spill-proof lid, great for travel.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Coffee Mugs</h1>
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
