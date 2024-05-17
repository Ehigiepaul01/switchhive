import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const useGetCategories = () => {
  return useQuery({
    queryFn: () =>
      axios
        .get(`${baseUrl}/categories`)
        .then((res) => res.data),
    queryKey: ["categories"],
  });
};

export const useCreateSubCategories = (reset, onClose, categoryID) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  return useMutation({
    mutationFn: async (values) => {
      const payload = { ...values, categoryId: categoryID };
      const res = await axios.post(
        `${baseUrl}/categories/subcategories`, payload
      );
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      toast({
        description: "SubCategory Created Successfully",
        variant: "success",
        duration: 2000,
      });
      navigate("/products");
      reset();
      onClose()
    },
  });
};

export const useCreateCategories = (reset, onClose) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
        `${baseUrl}/categories`, values
      );
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      toast({
        description: "Category Created Successfully",
        variant: "success",
        duration: 2000,
      });
      navigate("/products");
      reset();
      onClose();
    },
  });
};
