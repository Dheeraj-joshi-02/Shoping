import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Router;
