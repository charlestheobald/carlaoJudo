import { api } from "../api";

export const getAluno = () => {
  return api.get("/aluno").then((res) => res.data);
};

export const getAlunoById = (id) => {
  return api.get(`/aluno/${id}`).then((res) => res.data);
};

export const deleteAluno = (id) => {
  return api.delete(`/aluno/${id}`).then((res) => res.data);
};

export const updateAluno = (id, aluno) => {
  return api.put(`/aluno/${id}`, aluno).then((res) => res.data);
};

export const addAluno = (aluno) => {

  return api.post("/aluno/", aluno)
    .then((res) => console.log(res.data));


};
export const countAluno = () => {

  return api.get(`/aluno/count`).then((res) => console.log(res.data));
};
