export default function Cutlery() {
  const items = [
    {
      name: "Stainless Steel Fork Set",
      image: "/assets/cutlery/fork.jpg",
      description: "Durable stainless steel forks, set of 6.",
    },
    {
      name: "Spoon Set",
      image: "/assets/cutlery/spoon.jpg",
      description: "Polished stainless steel spoons for everyday dining.",
    },
    {
      name: "Knife Set",
      image: "/assets/cutlery/knife.jpg",
      description: "Sharp stainless steel knives for precision cutting.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Cutlery</h1>
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
