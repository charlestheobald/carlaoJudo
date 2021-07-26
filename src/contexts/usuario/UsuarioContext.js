import React, { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {


  const [nomeContexto, setNomeContexto] = useState("");
  const [emailContexto, setEmailContexto] = useState("")
  const [senhaContexto, setSenhaContexto] = useState("");

  return (
    <UsuarioContext.Provider
      value={{
        nomeContexto,
        setNomeContexto,
        emailContexto,
        setEmailContexto,
        senhaContexto,
        setSenhaContexto
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
