  import React, { useEffect, useState } from "react";
  import InstanceContext from "./Context";
  import { getInstance } from "./axios";
  const ContextProvide = ({ children }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      try {
        const response = await getInstance();
        let data = response.data
        setProducts(data);
        console.log(`data: ${data}`);
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

  export default ContextProvide;
