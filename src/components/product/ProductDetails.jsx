import React, { useEffect, useState } from "react";
import { getInstance } from "../../service/axios";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, Trash2, Star } from "lucide-react";
import Loading from "../common/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        setLoading(true);
        const response = await getInstance(`products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    getSingleProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loading />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Product Not Found
          </h2>
          <p className="mb-4 text-gray-600">
            {error || "The product you're looking for doesn't exist."}
          </p>
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4">
            <button
              onClick={() => navigate("/")}
              className="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Go back to products"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">
              Product Details
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2 lg:p-8">
            {/* Product Image */}
            <div className="flex items-center justify-center rounded-lg bg-gray-50 p-8">
              <img
                src={product.image}
                alt={product.title}
                className="h-auto max-h-96 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div>
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 capitalize">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl leading-tight font-bold text-gray-900">
                {product.title}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating.rate)
                            ? "fill-current text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">USD</span>
              </div>

              {/* Description */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Description
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                  <Edit className="h-4 w-4" />
                  Edit Product
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-6 py-3 font-medium text-red-600 transition-colors duration-200 hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
                  <Trash2 className="h-4 w-4" />
                  Delete Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
