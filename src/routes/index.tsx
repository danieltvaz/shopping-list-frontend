import LoginPage from "../pages/login/login";
import ProductListPage from "../pages/product-list";
import ProductsContextProvider from "../contexts/products/ProductsContextProvider";
import ProtectedRoute from "../hocs/ProtectedRoute";
import SignupPage from "../pages/signup";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ProductsContextProvider>
          <ProductListPage />
        </ProductsContextProvider>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default router;
