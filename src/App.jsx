import React from "react";
import Router from "./utils/Router";
import ContextProvider from "./context/ContextProvider";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <ContextProvider>
        <RouterProvider router={Router} />
      </ContextProvider>
    </React.Fragment>
  );
};

export default App;
