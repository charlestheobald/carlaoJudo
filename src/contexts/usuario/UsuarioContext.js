import React, { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {


  const [nomeContexto, setNomeContexto] = useState(null);
  const [usernameContexto, setUsernameContexto] = useState(null)
  const [senhaContexto, setSenhaContexto] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);
  const [imagemContexto, setImagemContexto] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null)
  const [user, setUser] = useState({})
  const [fullData, setFullData] = useState([])
  const [aluno, setAluno] = useState({})

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
        isAdmin,
        setIsAdmin,
        dayOfWeek,
        setDayOfWeek,
        fullData,
        setFullData,
        user,
        setUser,
        aluno,
        setAluno

      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
