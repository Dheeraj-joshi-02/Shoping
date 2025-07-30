import React, { useContext } from "react";
import { X, Filter, Plus } from "lucide-react";
import InstanceContext from "../../context/Context";
import { NavLink } from "react-router-dom";

export const Sidebar = ({
  isOpen,
  onClose,
  selectedCategory = "all",
  onCategoryChange = () => {},
}) => {
  const [products] = useContext(InstanceContext);

  // storing array categories in another array.
  let distinctProducts =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctProducts = [...new Set(distinctProducts)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()})`;
  };
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden"
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClose();
            }
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-72 transform flex-col border-r border-gray-200 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:z-0 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        aria-label="Product management sidebar"
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
          <h1 className="text-lg font-semibold text-gray-900">
            Product Manager
          </h1>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Add New Product Button */}
        <div className="border-b border-gray-200 p-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            <Plus className="h-4 w-4" />
            Add New Product
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex-1 p-6">
          <div className="mb-6 flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <h2 className="text-sm font-medium text-gray-900">
              Category Filter
            </h2>
          </div>

          <nav
            className="space-y-2"
            role="navigation"
            aria-label="Category filter"
          >
            <button
              onClick={() => onCategoryChange("all")}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
                selectedCategory === "all"
                  ? "bg-blue-50 font-medium text-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              aria-pressed={selectedCategory === "all"}
            >
              <div className="h-2 w-2 rounded-full bg-gray-400" />
              <span>All Categories</span>
            </button>
            {distinctProducts.map((category, id) => (
              <NavLink
                key={id}
                to={`/category/${category}`}
                onClick={() => onCategoryChange(category)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
                  selectedCategory === category
                    ? "bg-blue-50 font-medium text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                aria-pressed={selectedCategory === category}
              >
                <div
                  style={{ backgroundColor: color() }}
                  className={`h-2 w-2 rounded-full ${category}`}
                />
                <span>{category}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-medium text-white">
              <span>JD</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">
                John Doe
              </p>
              <p className="truncate text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

("Have any error in this code?");
