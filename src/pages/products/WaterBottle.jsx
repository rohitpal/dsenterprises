import { Link } from "react-router-dom";

export default function WaterBottle() {
  const items = [
    {
      name: "Insulated Steel Bottle",
      image: "/assets/waterbottle/steelbottle.jpg",
      path: "/products/water-bottle/sports-bottle",
      description: "Keeps your drink hot or cold for up to 12 hours.",
    },
    {
      name: "Plastic Sports Bottle",
      image: "/assets/waterbottle/sportsbottle.jpg",
      path: "/products/water-bottle/steel-bottle",
      description: "Lightweight and easy to carry, perfect for workouts.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Water Bottles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="border rounded-xl shadow bg-white p-4 text-center hover:shadow-lg transition"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
