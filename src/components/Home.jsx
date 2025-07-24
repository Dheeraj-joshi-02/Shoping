import React, { useContext, useState } from "react";
import { Header } from "./common/Header";
import { Sidebar } from "./layout/Sidebar";
import { ProductCard } from "./product/ProductCard";
import InstanceContext from "../context/Context";
import Loading from "./common/Loading";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products] = useContext(InstanceContext);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // Filter logic can be implemented here
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={handleCloseSidebar}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Main Content */}
        <div className="flex flex-col flex-1 min-w-0">
          <Header onMenuClick={handleMenuClick} />

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Page Header */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      Product Catalog
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                      Manage your product inventory and categories
                    </p>
                  </div>
                  
                  {/* Product Count */}
                  <div className="flex items-center gap-2">
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
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-600 mb-4">
                      No products match the selected category. Try selecting a different category.
                    </p>
                    <button
                      onClick={() => handleCategoryChange("all")}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                      Show All Products
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
