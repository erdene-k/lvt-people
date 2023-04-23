import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { AuthContextType } from "../models/itypes";

const AuthContext = createContext<AuthContextType |null>(null);

export const AuthProvider = ({ children, userData }: any) => {
  const [user, setUser] = useLocalStorage("sst_exd", userData);
  const navigate = useNavigate();

  const login = async (data: Object) => {
    setUser(data);
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
