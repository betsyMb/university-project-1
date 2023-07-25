import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorage";

type User = {
  user?: string;
  password?: string;
};

type IContext = {
  user: User;
  login: (data: User) => void;
  logout: () => void;
};

const initialValue: IContext = { user: {}, login: () => {}, logout: () => {} };

const AuthContext = createContext<IContext>(initialValue);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useLocalStorage({ keyName: "user", defaultValue: null });
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: User) => {
    setUser(data);
    navigate("/admin");
  };

  // call this function to sign out logged in user
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
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
