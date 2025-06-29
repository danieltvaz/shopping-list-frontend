import { Navigate } from "react-router";
import { ReactNode } from "react";
import authHandler from "../utils/auth-handler";

type ProtectedRouteTypes = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteTypes) {
  const { isAutenticated } = authHandler();

  if (isAutenticated()) return <>{children}</>;
  else return <Navigate to="/login" />;
}
