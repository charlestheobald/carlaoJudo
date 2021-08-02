import React, { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {


  const [nomeContexto, setNomeContexto] = useState(null);
  const [usernameContexto, setUsernameContexto] = useState(null)
  const [senhaContexto, setSenhaContexto] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);
  const [imagemContexto, setImagemContexto] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null)
  const [fullData, setFullData] = useState([

    {
      id: 2,
      horarioAula: "11:00",
      classe: "SENIOR_BRANCA_AMARELA",
      categoria: "MEDIO",
      dataIngresso: "2021-07-29",
      localTreino: "Centro",
      fjerj: null,
      cbjZempo: null,
      pontuacao: 123,
      dataUltimoExame: null,
      pagamento: "BOLETO",
      faixa: "AMARELA",
      sexo: "FEMININO",
      nomeResponsavel: null,
      telefoneResponsavel: null,
      endereco: {
        id: 1,
        cep: "25635401",
        logradouro: "Servidão João Rodrigues Batista",
        numero: 100,
        complemento: "Casa A",
        localidade: "Petrópolis",
        bairro: "Alto da Serra"
      },
      nome: "Lucão",
      usuario: "gisele123",
      dataNascimento: "1990-07-29",
      rg: null,
      cpf: null,
      telefone: "(24)99855-2233",
      email: "juliadonascimentosantos7@gmail.com",
      telefoneResp: null
    },
    {
      id: 3,
      horarioAula: "11:00",
      classe: "SENIOR_BRANCA_VERDE",
      categoria: "LEVE",
      dataIngresso: "2021-07-29",
      localTreino: "Centro",
      fjerj: null,
      cbjZempo: null,
      pontuacao: 1234,
      dataUltimoExame: null,
      pagamento: "BOLETO",
      faixa: "AMARELA",
      sexo: "MASCULINO",
      nomeResponsavel: null,
      telefoneResponsavel: null,
      endereco: {
        id: 1,
        cep: "25635401",
        logradouro: "Servidão João Rodrigues Batista",
        numero: 100,
        complemento: "Casa A",
        localidade: "Petrópolis",
        bairro: "Alto da Serra"
      },
      nome: "Leonardo",
      usuario: "gisele123",
      dataNascimento: "1990-07-29",
      rg: null,
      cpf: null,
      telefone: "(24)99855-2233",
      email: "juliadonascimentosantos7@gmail.com",
      telefoneResp: null
    },
    {
      id: 4,
      horarioAula: "11:00",
      classe: "SENIOR_ROXA_PRETA",
      categoria: "LEVE",
      dataIngresso: "2021-07-29",
      localTreino: "Centro",
      fjerj: null,
      cbjZempo: null,
      pontuacao: 0,
      dataUltimoExame: null,
      pagamento: "BOLETO",
      faixa: "AMARELA",
      sexo: "MASCULINO",
      nomeResponsavel: null,
      telefoneResponsavel: null,
      endereco: {
        id: 1,
        cep: "25635401",
        logradouro: "Servidão João Rodrigues Batista",
        numero: 100,
        complemento: "Casa A",
        localidade: "Petrópolis",
        bairro: "Alto da Serra"
      },
      nome: "Lucas",
      usuario: "gisele123",
      dataNascimento: "1990-07-29",
      rg: null,
      cpf: null,
      telefone: "(24)99855-2233",
      email: "juliadonascimentosantos7@gmail.com",
      telefoneResp: null
    },
    {
      id: 5,
      horarioAula: "11:00",
      classe: "SENIOR_LARANJA_VERDE",
      categoria: "LEVE",
      dataIngresso: "2021-07-29",
      localTreino: "Centro",
      fjerj: null,
      cbjZempo: null,
      pontuacao: 8000,
      dataUltimoExame: null,
      pagamento: "BOLETO",
      faixa: "AMARELA",
      sexo: "MASCULINO",
      nomeResponsavel: null,
      telefoneResponsavel: null,
      endereco: {
        id: 1,
        cep: "25635401",
        logradouro: "Servidão João Rodrigues Batista",
        numero: 100,
        complemento: "Casa A",
        localidade: "Petrópolis",
        bairro: "Alto da Serra"
      },
      nome: "Charlão Berranteiro",
      usuario: "gisele123",
      dataNascimento: "1990-07-29",
      rg: null,
      cpf: null,
      telefone: "(24)99855-2233",
      email: "juliadonascimentosantos7@gmail.com",
      telefoneResp: null
    },
    {
      id: 6,
      horarioAula: "11:00",
      classe: "SENIOR_BRANCA_VERDE",
      categoria: "LEVE",
      dataIngresso: "2002-07-29",
      localTreino: "Centro",
      fjerj: null,
      cbjZempo: null,
      pontuacao: 0,
      dataUltimoExame: null,
      pagamento: "BOLETO",
      faixa: "AMARELA",
      sexo: "MASCULINO",
      nomeResponsavel: null,
      telefoneResponsavel: null,
      endereco: {
        id: 1,
        cep: "25635401",
        logradouro: "Servidão João Rodrigues Batista",
        numero: 100,
        complemento: "Casa A",
        localidade: "Petrópolis",
        bairro: "Alto da Serra"
      },
      nome: "Julinha V8",
      usuario: "gisele123",
      dataNascimento: "1990-07-29",
      rg: null,
      cpf: null,
      telefone: "(24)99855-2233",
      email: "juliadonascimentosantos7@gmail.com",
      telefoneResp: null
    },
    {
      id: 7,
      horarioAula: "11:00",
      classe: "SENIOR_BRANCA_VERDE",
      categoria: "LEVE",
      dataIngresso: "2021-07-29",
      localTreino: "Centro",
      fjerj: null,
      cbjZempo: null,
      pontuacao: 10000,
      dataUltimoExame: null,
      pagamento: "BOLETO",
      faixa: "AMARELA",
      sexo: "MASCULINO",
      nomeResponsavel: null,
      telefoneResponsavel: null,
      endereco: {
        id: 1,
        cep: "25635401",
        logradouro: "Servidão João Rodrigues Batista",
        numero: 100,
        complemento: "Casa A",
        localidade: "Petrópolis",
        bairro: "Alto da Serra"
      },
      nome: "Débora",
      usuario: "gisele123",
      dataNascimento: "1974-07-29",
      rg: null,
      cpf: null,
      telefone: "(24)99855-2233",
      email: "juliadonascimentosantos7@gmail.com",
      telefoneResp: null
    },
    {
      id: 8,
      horarioAula: "11:00",
      classe: "VETERANO_1",
      categoria: "LEVE",
      dataIngresso: "2021-07-29",
      localTreino: "Centro",
      fjerj: null,
      cbjZempo: null,
      pontuacao: 5200,
      dataUltimoExame: null,
      pagamento: "BOLETO",
      faixa: "AMARELA",
      sexo: "MASCULINO",
      nomeResponsavel: null,
      telefoneResponsavel: null,
      endereco: {
        id: 1,
        cep: "25635401",
        logradouro: "Servidão João Rodrigues Batista",
        numero: 100,
        complemento: "Casa A",
        localidade: "Petrópolis",
        bairro: "Alto da Serra"
      },
      nome: "Ricardo das Goiaba",
      usuario: "gisele123",
      dataNascimento: "1960-07-29",
      rg: null,
      cpf: null,
      telefone: "(24)99855-2233",
      email: "juliadonascimentosantos7@gmail.com",
      telefoneResp: null
    },
  ])

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
        setFullData

      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
