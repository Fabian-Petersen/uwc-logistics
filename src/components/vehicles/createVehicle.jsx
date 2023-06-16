import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
// import supabase from "../config/supabaseClient";

export const useCreateVehicle = () => {
  const queryClient = useQueryClient();

  const { mutate: createVehicle } = useMutation({
    mutationFn: createVehicle,
    onSuccess: () => {
      toast.success("success");
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createVehicle };
};
