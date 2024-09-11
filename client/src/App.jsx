import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Shop from "./pages/shop";

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
          path: "shop",
          element: <Shop />,
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
