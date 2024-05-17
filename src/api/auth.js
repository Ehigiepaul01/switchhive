import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "./baseUrl";
import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { toast } = useToast();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
        `${baseUrl}/admins/login`,
        values
      );
      return res.data;
    },
    onSuccess: (res) => {
      login(res);
      toast({
        description: res.message,
        variant: "success",
        duration: 2000,
      });
      navigate("/dashboard");
    },
  });
};
