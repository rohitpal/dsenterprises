import { Link } from "react-router-dom";

export default function KitchenUtensils() {
  const items = [
    {
      name: "Stainless Steel Spatula",
      image: "/assets/utensils/spatula1.jpg",
      path: "/products/kitchen-utensils/spatula",
    },
    {
      name: "Non-stick Frying Pan",
      image: "/assets/utensils/fryingpan1.jpg",
      path: "/products/kitchen-utensils/frying-pan",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Kitchen Utensils</h1>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
