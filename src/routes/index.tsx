import LoginPage from "../pages/login/login";
import ProductListPage from "../pages/product-list";
import ProductsContextProvider from "../contexts/products/ProductsContextProvider";
import ProtectedRoute from "../hocs/ProtectedRoute";
import SignupPage from "../pages/signup";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    index: true,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <ProductsContextProvider>
          <ProductListPage />
        </ProductsContextProvider>
      </ProtectedRoute>
    ),
  },
]);

export default router;
