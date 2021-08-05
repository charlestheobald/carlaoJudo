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

export const updateAluno = (username, aluno) => {
  return api.put(`/aluno/${username}`, aluno).then((res) => res.data);
};

export const addAluno = (alunoVO) => {

  return api.post(`/aluno`, alunoVO)
    .then((res) => console.log(res.data));


};
export const countAluno = () => {

  return api.get(`/aluno/count`).then((res) => console.log(res.data));
};
