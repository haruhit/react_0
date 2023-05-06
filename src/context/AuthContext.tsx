import React, { createContext } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext<boolean>(false);

export const AuthProvider = ({ children }: Props) => {
  return <AuthContext.Provider value={false}>{children}</AuthContext.Provider>;
};

export default AuthContext;
