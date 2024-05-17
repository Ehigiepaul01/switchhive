import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";


export const useGetCoupon = () => {
    return useQuery({
      queryFn: () =>
        axios
          .get(`${baseUrl}/coupons`)
          .then((res) => res.data),
      queryKey: ["coupon"],
    });
  };