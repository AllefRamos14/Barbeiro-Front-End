import { createContext, useContext, useEffect, useState } from "react";
import { loginAdmin } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const savedAdmin = localStorage.getItem("@blade-comb:admin");

    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }

    setLoadingAuth(false);
  }, []);

  async function signIn({ email, password }) {
    const data = await loginAdmin({ email, password });

    localStorage.setItem("@blade-comb:token", data.token);
    localStorage.setItem("@blade-comb:admin", JSON.stringify(data.admin));

    setAdmin(data.admin);

    return data;
  }

  function signOut() {
    localStorage.removeItem("@blade-comb:token");
    localStorage.removeItem("@blade-comb:admin");

    setAdmin(null);
  }

  return (
    <AuthContext.Provider value={{ admin, signIn, signOut, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
