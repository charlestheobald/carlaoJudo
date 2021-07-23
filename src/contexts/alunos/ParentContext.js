import React, { createContext, useState } from "react";

export const ParentContext = createContext();

export const ParentProvider = ({ children }) => {


  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [telResponsavel, setTelResponsavel] = useState("");

  return (
    <ParentContext.Provider
      value={{
        nomeResponsavel,
        setNomeResponsavel,
        telResponsavel,
        setTelResponsavel
      }}
    >
      {children}
    </ParentContext.Provider>
  );
};
