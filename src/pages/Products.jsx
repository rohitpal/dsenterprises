import { Link } from "react-router-dom";

const categories = [
  {
    name: "Kitchen Utensils",
    path: "/products/kitchen-utensils",
    image: "/assets/categories/kitchen-utensils.jpg",
  },
  {
    name: "Water Bottle",
    path: "/products/water-bottle",
    image: "/assets/categories/water-bottle.jpg",
  },
  {
    name: "Coffee Mug",
    path: "/products/coffee-mug",
    image: "/assets/categories/coffee-mug.jpg",
  },
  {
    name: "Copper Glass",
    path: "/products/copper-glass",
    image: "/assets/categories/copper-glass.jpg",
  },
  {
    name: "Cutlery",
    path: "/products/cutlery",
    image: "/assets/categories/cutlery.jpg",
  },
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            className="border rounded-2xl shadow hover:shadow-lg transition bg-white overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">
                {cat.name}
              </h2>
              <p className="text-gray-600">
                Explore our {cat.name} collection
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
