import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ProductCard } from "./ProductCard";
import { Loader2 } from "lucide-react";
import { useProducts } from "../hooks/useProduct";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { products, loading, selectedCategory, setSelectedCategory } =
    useProducts();

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen overflow-y-hidden bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={handleCloseSidebar}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Header onMenuClick={handleMenuClick} />

          <main className="flex-1 overflow-y-scroll sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="mb-2 text-2xl font-bold text-gray-900">
                  Product Catalog
                </h1>
                <p className="text-gray-600">
                  Manage your product inventory and categories
                </p>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                  <span className="ml-2 text-gray-600">
                    Loading products...
                  </span>
                </div>
              )}

              {/* Products Grid */}
              {!loading && (
                <>
                  <div className="mb-6">
                    <p className="text-sm text-gray-600">
                      Showing {products.length} product
                      {products.length !== 1 ? "s" : ""}
                      {selectedCategory !== "all" && (
                        <span className="ml-1">in selected category</span>
                      )}
                    </p>
                  </div>

                  {products.length === 0 ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                        <span className="text-2xl text-gray-400">📦</span>
                      </div>
                      <h3 className="mb-2 text-lg font-medium text-gray-900">
                        No products found
                      </h3>
                      <p className="mb-6 text-gray-600">
                        {selectedCategory === "all"
                          ? "Get started by adding your first product."
                          : "No products found in the selected category."}
                      </p>
                      <button className="rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800">
                        Add New Product
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
