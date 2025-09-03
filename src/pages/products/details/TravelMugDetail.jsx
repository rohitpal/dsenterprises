import { useState } from "react";

export default function TravelMugDetail() {
  const images = ["/assets/waterbottle/sports1.jpg", "/assets/waterbottle/sports2.jpg"];
  const [current, setCurrent] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <img src={images[current]} alt="Sports Bottle" className="h-96 object-contain rounded-lg shadow" />
        <div className="flex gap-2 mt-4">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Thumb ${idx}`} className={`h-20 w-20 object-cover rounded cursor-pointer border ${idx===current?"border-blue-600":"border-gray-300"}`} onClick={()=>setCurrent(idx)}/>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Plastic Sports Bottle</h1>
        <p className="text-xl text-green-700 font-semibold mb-6">₹199</p>
        <p className="text-gray-700 mb-6">Lightweight and easy to carry, perfect for gym and outdoor use.</p>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <tbody>
            <tr><th className="border px-4 py-2 bg-gray-100">Capacity</th><td className="border px-4 py-2">1 Litre</td></tr>
            <tr><th className="border px-4 py-2 bg-gray-100">Material</th><td className="border px-4 py-2">BPA Free Plastic</td></tr>
            <tr><th className="border px-4 py-2 bg-gray-100">Color Options</th><td className="border px-4 py-2">Red, Blue, Black</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
