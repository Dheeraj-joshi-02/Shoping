import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProvider from "./context/ContextProvider";
import Router from "./utils/Router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={Router} />
  </ContextProvider>,
);
