import axios from "axios";

export const api = axios.create({
  baseURL: "https://ecommerce-api-penguin.herokuapp.com",
});
