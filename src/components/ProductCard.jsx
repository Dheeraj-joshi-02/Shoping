import React from "react";
import { MoreHorizontal } from "lucide-react";
import { NavLink } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <NavLink
      to={`/productdetails/${product.id}`}
      className="group mx-auto w-full max-w-[280px] cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden p-2">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-1.5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="line-clamp-1 text-base font-semibold text-gray-900">
            {product.title}
          </h3>
          <div className="rounded-lg p-1 opacity-0 transition group-hover:opacity-100 hover:bg-gray-100">
            <MoreHorizontal className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
            {product.category}
          </span>
        </div>
      </div>
    </NavLink>
  );
}
