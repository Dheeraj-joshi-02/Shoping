import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="p-10 text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen grid place-content-center bg-white px-6 py-12 sm:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-[400px] w-auto object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-sm text-gray-400 capitalize">{product.category}</p>
          <p className="text-xl text-rose-500 font-semibold">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 rounded border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
              Edit
            </button>
            <button className="px-4 py-2 rounded border border-red-400 text-red-500 hover:bg-red-50 transition">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
