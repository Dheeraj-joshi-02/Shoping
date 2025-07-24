import React from "react";
import { MoreHorizontal } from "lucide-react";
import { NavLink } from "react-router-dom";

export function ProductCard({ product }) {
  if (!product) return null;

  return (
    <NavLink
      to={`/productdetails/${product.id}`}
      className="group block w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`View details for ${product.title}`}
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Action Button */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            className="p-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Handle menu action
            }}
            aria-label="Product options"
          >
            <MoreHorizontal className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Title and Category */}
        <div className="mb-3">
          <h3 className="text-base font-semibold text-gray-900 line-clamp-1 mb-1">
            {product.title}
          </h3>
          <span className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full capitalize">
            {product.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-500">In Stock</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
