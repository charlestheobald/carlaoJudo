import axios from "axios";

export const api = axios.create({
  baseURL: "https://judocarlao.herokuapp.com/judo_t2m/",
});
