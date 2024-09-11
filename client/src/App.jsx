import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "catalog",
          element: <Catalog />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
