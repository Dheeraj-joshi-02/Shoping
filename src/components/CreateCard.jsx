import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./button/Button";

export default function AddProductForm() {
  const [product, setProduct] = useState({
    imageUrl: "",
    name: "",
    price: "",
    quantity: 1,
    description: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", product);
    setProduct([]);
  };

  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto grid max-w-md place-items-center rounded-md border border-gray-200 p-4 shadow-sm">
        <h1 className="mb-4 text-2xl font-semibold">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="imageUrl"
            placeholder="Product Image URL"
            value={product.imageUrl}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 p-2"
          />
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 p-2"
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleChange}
              className="flex-1 rounded-md border border-gray-200 p-2"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={product.quantity}
              onChange={handleChange}
              className="w-20 rounded-md border border-gray-200 p-2"
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 p-2"
          />
          <div className="flex gap-2">
            <Button
              text={"Add New Product"}
              className={`flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none`}
            />
            <NavLink to={"/"}>
              <Button
                text={"Go to Home"}
                className={`flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-6 py-3 font-medium text-red-600 transition-colors duration-200 hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none`}
              />
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
