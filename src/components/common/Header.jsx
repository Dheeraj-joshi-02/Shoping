import React from "react";
import { Menu, Search, Bell, Settings } from "lucide-react";
import Button from "../button/Button";

export function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left section - Menu and Brand */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onMenuClick}
              className="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:hidden"
              aria-label="Open sidebar menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="hidden lg:block">
              <h1 className="text-xl font-semibold text-gray-900">Shopping.</h1>
            </div>
          </div>

          {/* Center section - Search */}
          <div className="mx-4 max-w-md flex-1">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm placeholder-gray-500 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                aria-label="Search products"
              />
            </div>
          </div>

          {/* Right section - Actions and Profile */}
          <div className="flex items-center gap-2">
            <Button
              className="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              className="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Settings"
            >
              <Settings className="h-5 w-5" />
            </Button>
            <div className="ml-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-medium text-white">
                <span>DJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
