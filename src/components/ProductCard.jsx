import React from "react";
import { MoreHorizontal } from "lucide-react";
import { NavLink } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <NavLink
      to={`/productdetails/${product.id}`}
      className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg leading-tight font-semibold text-gray-900">
            {product.name}
          </h3>
          <NavLink to={`/productdetails/${product.id}`} className="rounded-lg p-1 opacity-0 transition-colors group-hover:opacity-100 hover:bg-gray-100">
            <MoreHorizontal className="h-5 w-5 text-gray-400" />
          </NavLink>
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            {product.category}
          </span>
        </div>
      </div>
    </NavLink>
  );
}
