import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import InstanceContext from "../../context/Context";

export default function AddProductForm() {
  const [item, setItems] = useContext(InstanceContext);
  console.log(item);

  const productsValue = {
    imageUrl: "",
    name: "",
    cetegory: "",
    quantity: "",
    description: "",
  };

  const [product, setProduct] = useState(productsValue);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const AddProductHandler = () => {
    if (
      !product.imageUrl.trim() ||
      !product.name.trim() ||
      !product.cetegory.trim() ||
      !product.quantity.trim() ||
      !product.description.trim()
    ) {
      alert("All fields must be filled correctly!");
      return;
    }
    setItems((prev) => [...prev, product]);
    console.log("Product added:", product);
  };

  return (
    <div className="flex h-screen items-center">
      <div className="shadow-sm' mx-auto max-w-lg rounded-md border border-gray-200 p-6 shadow-gray-300">
        <h1 className="mb-6 pl-2 text-2xl font-semibold">Add New Product</h1>
        <form onSubmit={AddProductHandler} className="space-y-4">
          <input
            type="url"
            name="imageUrl"
            placeholder="Product Image URL"
            value={product.imageUrl}
            onChange={inputChange}
            className="w-full rounded-md bg-gray-100 p-3"
          />
          <input
            type="text"
            name="name"
            placeholder="Product Name / Title"
            value={product.name}
            onChange={inputChange}
            className="w-full rounded-md bg-gray-100 p-3"
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="cetegory"
              placeholder="cetegory"
              value={product.cetegory}
              onChange={inputChange}
              className="w-full flex-1 rounded-md bg-gray-100 p-3"
            />
            <input
              type="text"
              name="quantity"
              placeholder="Price"
              value={product.quantity}
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
