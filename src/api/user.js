import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const useGetUsers = (currentPage, limit) => {
  return useQuery({
    queryKey: ["users", currentPage, limit],
    queryFn: () =>
      axios
        .get(`${baseUrl}/users?page=${currentPage}&limit=${limit}`)
        .then((res) => res.data),
    keepPreviousData: true, // keep previous data
  });
};

export const useGetUsersByID = (id) => {
  return useQuery({
    queryFn: () => axios.get(`${baseUrl}/users/${id}`).then((res) => res.data),
    queryKey: ["users"],
  });
};

export const useDeleteUsers = (id) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.delete(`${baseUrl}/users/${id}`, values);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast({
        description: "User deleted Successfully",
        variant: "success",
        duration: 2000,
      });
      navigate("/users");
    },
  });
};

export const useCreateUsers = (reset) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
        `${baseUrl}/admin-user-operations/create-user`,
        values
      );
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast({
        description: "User Created Successfully",
        variant: "success",
        duration: 2000,
      });
      navigate("/users");
      reset();
    },
  });
};

export const useEditUsers = (reset, id) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.put(`${baseUrl}/users/${id}`, values);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast({
        description: "User Edited Successfully",
        variant: "success",
        duration: 2000,
      });
      navigate("/users");
      reset();
    },
  });
};

export const useGetAdminManagement = () => {
  return useQuery({
    queryFn: () => axios.get(`${baseUrl}/admins`).then((res) => res.data),
    queryKey: ["adminManagement"],
  });
};

export const useGetAdminRoles = () => {
  return useQuery({
    queryFn: () => axios.get(`${baseUrl}/admins/roles`).then((res) => res.data),
    queryKey: ["adminRoles"],
  });
};


export const useDeleteAdminRole = (onClose, id) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await axios.delete(`${baseUrl}/admins/role/${id}`);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminRoles"],
      });
      toast({
        description: "Admin role deleted Successfully",
        variant: "success",
        duration: 2000,
      });
      onClose();
    },
  });
};


export const useCreateRoles = (reset) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
        `${baseUrl}/admins/role`,
        values
      );
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminRoles"],
      });
      toast({
        description: "Role Created Successfully",
        variant: "success",
        duration: 2000,
      });
      reset();
    },
  });
};


export const useEditRoles = (reset, roleID) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.put(`${baseUrl}/admins/role/${roleID}/permissions`, values);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminRoles"],
      });
      toast({
        description: "Role Edited Successfully",
        variant: "success",
        duration: 2000,
      });
      reset();
    },
  });
};

export const useInviteAdmin = (reset) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(`${baseUrl}/admins/invite`, values);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminManagement"],
      });
      toast({
        description: "Admin Invited Successfully",
        variant: "success",
        duration: 2000,
      });
      navigate("/users/admin-management");
      reset();
    },
  });
};