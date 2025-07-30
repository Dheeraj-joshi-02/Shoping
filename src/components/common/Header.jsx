import React from "react";
import { Menu, Search, Bell, Settings } from "lucide-react";

export function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section - Menu and Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden transition-colors duration-200"
              aria-label="Open sidebar menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden lg:block">
              <h1 className="text-xl font-semibold text-gray-900">Shopping.</h1>
            </div>
          </div>

          {/* Center section - Search */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                aria-label="Search products"
              />
            </div>
          </div>

          {/* Right section - Actions and Profile */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <div className="ml-2">
              <div className="flex items-center justify-center w-8 h-8 text-sm font-medium text-white rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                <span>DJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
