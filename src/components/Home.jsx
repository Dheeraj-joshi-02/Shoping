import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ProductCard } from "./ProductCard";
import { Loader2 } from "lucide-react";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />

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
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
