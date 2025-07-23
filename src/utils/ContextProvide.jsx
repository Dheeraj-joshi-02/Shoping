import React, { useEffect, useState } from "react";
import Context from "./Context";
import { getInstance } from "./axios";
const ContextProvide = ({ children }) => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const response = await getInstance();
      console.log(response.data.products);
      setProducts(response);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Context.Provider value={[products, setProducts]}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvide;
