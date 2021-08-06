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
  return api.get(`/aluno/count`).then((res) => console.log('log  service ' + res.data));
};

export const postParticipacao = (idEvento, idAluno) => {
  return api.post(`/participacao?idEvento=${idEvento}&idAluno=${idAluno}`).then((res) => console.log(res.data))
}
export const getParticipantesEvento = (idEvento) => {
  return api.get(`/participacao?idEvento=${idEvento}`).then((res) => console.log(res.data))
}

export const getEventos = () => {
  return api.get(`/evento`).then((res) => console.log(res.data))
}
export const getPagamentos = () => {
  return api.get(`/aluno/pagamentos`).then((res) => console.log(res.data));
}
