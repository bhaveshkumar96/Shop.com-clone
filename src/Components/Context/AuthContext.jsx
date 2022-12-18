import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleUser = () => {
    setIsAuth(true);
    setToken("Bhavesh Kumar");
  };
  
  return (
    <AuthContext.Provider
      value={{ isAuth, toggleUser, setLoading,loading,token}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
