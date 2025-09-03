import { useState } from "react";

export default function SteelBottleDetail() {
  const images = ["/assets/waterbottle/steel1.jpg", "/assets/waterbottle/steel2.jpg"];
  const [current, setCurrent] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <img src={images[current]} alt="Steel Bottle" className="h-96 object-contain rounded-lg shadow" />
        <div className="flex gap-2 mt-4">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Thumb ${idx}`} className={`h-20 w-20 object-cover rounded cursor-pointer border ${idx===current?"border-blue-600":"border-gray-300"}`} onClick={()=>setCurrent(idx)}/>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Insulated Steel Bottle</h1>
        <p className="text-xl text-green-700 font-semibold mb-6">₹499</p>
        <p className="text-gray-700 mb-6">Keeps drinks hot or cold for up to 12 hours, sleek and durable.</p>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <tbody>
            <tr><th className="border px-4 py-2 bg-gray-100">Capacity</th><td className="border px-4 py-2">750 ml</td></tr>
            <tr><th className="border px-4 py-2 bg-gray-100">Material</th><td className="border px-4 py-2">Stainless Steel</td></tr>
            <tr><th className="border px-4 py-2 bg-gray-100">Thermal Insulation</th><td className="border px-4 py-2">12 hrs</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
