import React, { useContext, useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ProductCard } from "./ProductCard";
import { Loader2 } from "lucide-react";
import InstanceContext from "../utils/Context";
import ProductDetails from "./ProductDetails";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [product] = useContext(InstanceContext);
  console.log(product);

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

          <main className="flex-1 overflow-y-scroll sm:p-6 lg:p-4">
            <div className="">
              {/* Page Header */}
              <div className="text-center p-2 lg:text-left pl-4">
                <h1 className="text-xl font-bold text-gray-900 sm:text-xl md:text-xl">
                  Product Catalog
                </h1>
                <p className="text-sm text-gray-600 sm:text-base">
                  Manage your product inventory and categories
                </p>
              </div>
            </div>

            <div className="grid gap-4 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {product.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
