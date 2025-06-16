import PWABadge from "./PWABadge.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PWABadge />
    </>
  );
}

export default App;
