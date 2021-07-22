import { api } from "../api";

export const getAluno = () => {
  return api.get("/alunos").then((res) => res.data);
};

export const getAlunoById = (id) => {
  return api.get(`/alunos/${id}`).then((res) => res.data);
};

export const deleteAluno = (id) => {
  return api.delete(`/alunos/${id}`).then((res) => res.data);
};

export const updateAluno = (id, aluno) => {
  return api.put(`/alunos/${id}`, aluno).then((res) => res.data);
};

export const addAluno = (cliente) => {
  return api.post("/alunos/", aluno).then((res) => res.data);
};
