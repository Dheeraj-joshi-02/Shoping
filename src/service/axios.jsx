import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const getInstance = (endpoint = "products/") => {
  return instance.get(endpoint);
};
