import { Menu, Moon, Sun } from "lucide-react";
import Button from "../button/Button";
import { useState } from "react";

export function Header({ onMenuClick }) {
  const [Icon, setIcon] = useState(<Sun />);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left section */}
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

          {/* Right section*/}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIcon(<Moon />)}
              className="cursor-pointer rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Notifications"
            >
              {Icon}
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
