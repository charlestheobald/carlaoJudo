import axios from "axios";

export const api = axios.create({
  baseURL: "https://teamcarlao.herokuapp.com/judo_t2m/",
  auth: {
    username: 'powerJudo',
    password: '123456'
  }
});
