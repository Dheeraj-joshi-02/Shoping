import { Loader2 } from "lucide-react";
import React from "react";

const Loading = ({ message = "Loading...", size = "default" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    default: "w-8 h-8",
    large: "w-12 h-12"
  };

  return (
    <div className="flex items-center justify-center p-8" role="status" aria-live="polite">
      <div className="flex items-center gap-3">
        <Loader2 
          className={`${sizeClasses[size]} animate-spin text-blue-600`}
          aria-hidden="true"
        />
        <span className="text-sm font-medium text-gray-700">
          {message}
        </span>
      </div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
};

export default Loading;
