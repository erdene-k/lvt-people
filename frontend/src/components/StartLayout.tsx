import { Navigate, useOutlet } from "react-router-dom";
import { AuthProvider, useAuth } from "../hooks/useAuth";
import { AuthContextType } from "../models/itypes";

export const StartLayout = () => {
  const { user } = useAuth() as AuthContextType;
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  return <div>{outlet}</div>;
};
