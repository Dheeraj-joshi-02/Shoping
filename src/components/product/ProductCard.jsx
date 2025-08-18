import { NavLink } from "react-router-dom";

export function ProductCard({ product }) {
  if (!product) return null;

  return (
    <NavLink
      to={`/productdetails/${product.id}`}
      className="group mx-auto block w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
      aria-label={`View details for ${product.title}`}
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Title and Category */}
        <div className="mb-3">
          <h3 className="mb-1 line-clamp-1 text-base font-semibold text-gray-900">
            {product.title}
          </h3>
          <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 capitalize">
            {product.category}
          </span>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-500">In Stock</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
