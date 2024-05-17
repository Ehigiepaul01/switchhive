import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const useGetBlogs = () => {
  return useQuery({
    queryFn: () =>
      axios
        .get(`${baseUrl}/blog`)
        .then((res) => res.data),
    queryKey: ["blogs"],
  });
};

export const useDeleteBlogs = (onClose) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.delete(`${baseUrl}/blog/${values}`);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast({
        description: "Blog deleted Successfully",
        variant: "success",
        duration: 2000,
      });
      onClose();
    },
  });
};

export const useEditBlogs = (toggle) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values) => {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { formdata, id } = values;
      const res = await axios.patch(`${baseUrl}/blog/${id}`, formdata, config);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast({
        description: "Blog Edited Successfully",
        variant: "success",
        duration: 2000,
      });
      toggle();
    },
  });
};

export const useCreateBlogs = (reset) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
      mutationFn: async (values) => {
        const res = await axios.post(
          `${baseUrl}/blog`,
          values
        );
        return res;
      },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast({
        description: "Blog Created Successfully",
        variant: "success",
        duration: 2000,
      });
      reset();
      navigate("/blog");
    },
  });
};
