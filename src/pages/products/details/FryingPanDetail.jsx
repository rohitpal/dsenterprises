import { useState } from "react";

export default function FryingPanDetail() {
  const images = ["/assets/utensils/fryingpan1.jpg", "/assets/utensils/fryingpan2.jpg"];
  const [current, setCurrent] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <img src={images[current]} alt="Frying Pan" className="h-96 object-contain rounded-lg shadow" />
        <div className="flex gap-2 mt-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              className={`h-20 w-20 object-cover rounded cursor-pointer border ${idx === current ? "border-blue-600" : "border-gray-300"}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Non-stick Frying Pan</h1>
        <p className="text-xl text-green-700 font-semibold mb-6">₹799</p>
        <p className="text-gray-700 mb-6">Premium non-stick frying pan for even heating and oil-free cooking.</p>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <tbody>
            <tr><th className="border px-4 py-2 bg-gray-100">Material</th><td className="border px-4 py-2">Aluminum + Non-stick</td></tr>
            <tr><th className="border px-4 py-2 bg-gray-100">Diameter</th><td className="border px-4 py-2">28 cm</td></tr>
            <tr><th className="border px-4 py-2 bg-gray-100">Induction Compatible</th><td className="border px-4 py-2">Yes</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
