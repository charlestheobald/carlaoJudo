import React, { createContext, useState } from "react";

export const ParentContext = createContext();

export const ParentProvider = ({ children }) => {


  const [nomeResponsavel, setNomeResponsavel] = useState(null)
  const [telResponsavel, setTelResponsavel] = useState(null);
  const [emailResponsavel, setEmailResponsavel] = useState(null);

  return (
    <ParentContext.Provider
      value={{
        nomeResponsavel,
        setNomeResponsavel,
        telResponsavel,
        setTelResponsavel,
        emailResponsavel,
        setEmailResponsavel
      }}
    >
      {children}
    </ParentContext.Provider>
  );
};
