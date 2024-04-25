import React, { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const User = {};
  return <AuthContext.Provider value={User}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
