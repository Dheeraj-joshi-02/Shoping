import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ProductDetails from "../components/product/ProductDetails";
import CreateCard from "../components/CreateCard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/category/:category",
    element: <Home />,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/create",
    element: <CreateCard />,
  },
]);

export default Router;
