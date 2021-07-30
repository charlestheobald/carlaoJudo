import React, { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {


  const [nomeContexto, setNomeContexto] = useState(null);
  const [usernameContexto, setUsernameContexto] = useState(null)
  const [senhaContexto, setSenhaContexto] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [imagemContexto, setImagemContexto] = useState(null)

  return (
    <UsuarioContext.Provider
      value={{
        nomeContexto,
        setNomeContexto,
        usernameContexto,
        setUsernameContexto,
        senhaContexto,
        setSenhaContexto,
        imagemContexto,
        setImagemContexto,
        isLogged,
        setIsLogged

      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
