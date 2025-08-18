import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import InstanceContext from "../../context/Context";

export default function AddProductForm() {
  const [item, setItems] = useContext(InstanceContext);

  const productsValue = {
    image: "",
    title: "",
    category: "",
    description: "",
    price: "",
  };

  const [product, setProduct] = useState(productsValue);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const AddProductHandler = (event) => {
    event.preventDefault();
    if (
      !product.image.trim() ||
      !product.title.trim() ||
      !product.category.trim() ||
      !product.price.trim() ||
      !product.description.trim()
    ) {
      alert("All fields must be filled correctly!");
      return;
    }
    setItems((prev) => [...prev, product]);
    localStorage.setItem("products", JSON.stringify([...item, product]));
    setProduct(productsValue);
  };

  return (
    <div className="flex h-screen items-center p-2">
      <div className="shadow-sm' mx-auto max-w-lg rounded-md border border-gray-200 p-6 shadow-gray-300">
        <h1 className="mb-6 pl-2 text-2xl font-semibold">Add New Product</h1>
        <form onSubmit={AddProductHandler} className="space-y-4">
          <input
            type="url"
            name="image"
            placeholder="Product Image URL"
            value={product.image}
            onChange={inputChange}
            className="w-full rounded-md bg-gray-100 p-3"
          />
          <input
            type="text"
            name="title"
            placeholder="title"
            value={product.title}
            onChange={inputChange}
            className="w-full rounded-md bg-gray-100 p-3"
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="category"
              placeholder="category"
              value={product.category}
              onChange={inputChange}
              className="w-full flex-1 rounded-md bg-gray-100 p-3"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={inputChange}
              className="w-24 rounded-md bg-gray-100 p-3"
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={inputChange}
            className="w-full rounded-md bg-gray-100 p-3"
          />
          <div className="flex gap-2">
            <Button
              text={"Add New Product"}
              type="submit"
              className={`flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none`}
            />
            <NavLink to={"/"}>
              <Button
                text={"Go to Home"}
                type="button"
                className={`flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-6 py-3 font-medium text-red-600 transition-colors duration-200 hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none`}
              />
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
