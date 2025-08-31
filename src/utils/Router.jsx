import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ProductDetails from "../components/product/ProductDetails";
import CreateCard from "../components/product/CreateCard";

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
    path: "/create",
    element: <CreateCard />,
  },
]);

export default Router;
