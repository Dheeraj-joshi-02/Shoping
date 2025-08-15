import React, { useState } from "react";
import InstanceContext from "./Context";
import Data from "../storage/localStorage";

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || Data,
  );

  return (
    <InstanceContext.Provider value={[products, setProducts]}>
      {children}
    </InstanceContext.Provider>
  );
};

export default ContextProvider;
