import React from "react";
import { Menu, Search, Bell, Settings } from "lucide-react";

export function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="rounded-lg p-2 transition-colors hover:bg-gray-100 lg:hidden"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
            <div className="hidden lg:block">
              <h1 className="text-xl font-semibold text-gray-900">Products</h1>
            </div>
          </div>

          <div className="mx-4 max-w-md flex-1">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="text-sm font-medium text-white">DJ</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
