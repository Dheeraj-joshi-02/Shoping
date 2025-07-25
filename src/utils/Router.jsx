import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ProductDetails from "../components/ProductDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Router;
