import axios from "axios";

const insert = axios.create({
  baseURL: "https://server-freelance-marketplace.vercel.app/",
});

export const useAxiosData = () => {
  return insert;
};
