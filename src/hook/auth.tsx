import { useState, createContext, useContext } from "react";
import AuthService from "../service/AuthService";

const authContext = createContext<any>(null);

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props: Object) {
  const [user, setUser] = useState<any>(null);

  const loginWithGoogle = async () => {
    try {
      const res = await AuthService.loginWithGoogle();
    } catch (err) {
      alert(err.message);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const { user } = await AuthService.signup(email, password);
      setUser(user ?? null);
    } catch (err) {
      alert(err.message);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { user } = await AuthService.login(email, password);
      setUser(user ?? null);
    } catch (err) {
      alert(err.message);
    }
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const value = { user, loginWithGoogle, signup, login, logout, setUser };

  return <authContext.Provider value={value} {...props} />;
}
