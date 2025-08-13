import React, { useContext, useState } from "react";
import { Header } from "./common/Header";
import { Sidebar } from "./layout/Sidebar";
import { ProductCard } from "./product/ProductCard";
import InstanceContext from "../context/Context";
import Loading from "./common/Loading";
import { useLocation } from "react-router-dom";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products] = useContext(InstanceContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  console.log(category);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="m-auto min-h-screen max-w-7xl border border-gray-200 bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={handleCloseSidebar}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Header onMenuClick={handleMenuClick} />

          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              {/* Page Header */}
              <div className="mb-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      Product Catalog
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                      Manage your product inventory and categories
                    </p>
                  </div>

                  {/* Product Count */}
                  <div className="gap-2 text-center lg:text-left">
                    <span className="text-sm text-gray-500">
                      {filteredProducts.length} of {products.length} products
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              {products.length === 0 ? (
                <div className="flex items-center justify-center py-12">
                  <Loading message="Loading products..." />
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="mx-auto max-w-md">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                      <span className="text-2xl text-gray-400">📦</span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      No products match the selected category. Try selecting a
                      different category.
                    </p>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleCategoryChange("all")}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                      >
                        Show All Products
                      </button>
                      <button className="rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800">
                        Add New Product
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
