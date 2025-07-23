import React from "react";
import { X, Filter, Plus } from "lucide-react";

const categories = [
  { id: "1", name: "Electronics", color: "bg-blue-500" },
  { id: "2", name: "Clothing", color: "bg-orange-500" },
  { id: "3", name: "Home & Garden", color: "bg-green-500" },
  { id: "4", name: "Books", color: "bg-purple-500" },
  { id: "5", name: "Sports", color: "bg-red-500" },
];

export function Sidebar({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} flex w-72 flex-col lg:static lg:z-0 lg:translate-x-0`}
      >
        {/* Header */}
        <div className="h-14 px-5 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900">
              Product Manager
            </h1>
            <button
              onClick={onClose}
              className="rounded-lg p-1 transition-colors hover:bg-gray-100 lg:hidden"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Add New Product Button */}
        <div className="border-b border-gray-200 p-4">
          <button className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-black px-4 py-3 font-medium text-white transition-colors hover:bg-gray-800">
            <Plus className="h-4 w-4" />
            Add New Product
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex-1 p-6 text-center">
          <div className="mb-6 flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <h2 className="font-medium text-gray-900">Category Filter</h2>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => onCategoryChange("all")}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                selectedCategory === "all"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <div className="h-2 w-2 rounded-full bg-gray-400" />
              <span className="cursor-pointer">All Categories</span>
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                  selectedCategory === category.id
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className={`h-2 w-2 rounded-full ${category.color}`} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="text-sm font-medium text-white">JD</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">
                John Doe
              </p>
              <p className="truncate text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
