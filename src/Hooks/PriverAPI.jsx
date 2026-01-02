import axios from "axios";
import { useAuth } from "./UseAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const insert = axios.create({
  
  // baseURL: "https://server-freelance-marketplace.vercel.app/",
  baseURL: "http://localhost:4000/",
});

const usePrivetApi = () => {
  const { user, logOutUser } = useAuth();
  const navigetPage = useNavigate();

  useEffect(() => {
    // request a heders set
    const interceptorId = insert.interceptors.request.use((configs) => {
      if (user.accessToken) {
        configs.headers.authorization = `Bearer ${user.accessToken}`;
      }
      return configs;
    });

    //  response error chack
    const resintartedId = insert.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const stat = err.status;
        if (stat === 401 || stat === 403) {
          logOutUser().then(() => {
            navigetPage("/register");
          });
        }
      }
    );

    return () => {
      insert.interceptors.request.eject(interceptorId);

      insert.interceptors.response.eject(resintartedId);
    };
  }, [user, logOutUser, navigetPage]);

  return insert;
};

export default usePrivetApi;
