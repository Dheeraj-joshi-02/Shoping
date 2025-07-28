import React, { useEffect, useState } from "react";
import InstanceContext from "./Context";
import { getInstance } from "../service/axios";
const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await getInstance();
      setProducts(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <InstanceContext.Provider value={[products, setProducts]}>
      {children}
    </InstanceContext.Provider>
  );
};

export default ContextProvider;
