import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ a: "hello" }}>
      {children}
    </GlobalContext.Provider>
  );
};
