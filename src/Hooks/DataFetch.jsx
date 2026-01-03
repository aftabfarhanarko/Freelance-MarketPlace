import axios from "axios";

const insert = axios.create({
  // baseURL: "https://server-freelance-marketplace.vercel.app/",
  baseURL: "http://localhost:4000/",
});

export const useAxiosData = () => {
  return insert;
};
