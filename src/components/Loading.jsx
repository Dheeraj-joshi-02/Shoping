import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        <span className="ml-2 text-gray-600">Loading products...</span>
      </div>
    </>
  );
};

export default Loading;
