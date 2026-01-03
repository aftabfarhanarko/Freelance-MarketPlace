import { useMutation } from "@tanstack/react-query";
import usePrivateApi from "./PrivateAPI";

const useUpdateRole = () => {
    const nextapi = usePrivateApi()
  return useMutation({
    mutationFn: async ({ id, role }) => {
      const res = await nextapi.patch(`roleUpdeat/${id}`, {
         role,
      });
      return res.data;
    },
  });
};

export default useUpdateRole;
