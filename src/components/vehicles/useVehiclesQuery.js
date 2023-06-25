import supabase from "../../config/supabaseClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useVehiclesQuery = () => {
  const queryClient = useQueryClient();

  const getVehicles = async () => {
    const { data, error } = await supabase.from("vehicles").select("*");

    if (error) {
      console.error(error);
      throw new Error("vehicles could not be loaded");
    }

    return data;
  };

  function prefetchUsers() {
    return queryClient.prefetchQuery({
      queryKey: ["vehicles"],
      queryFn: getVehicles,
    });
  }

  prefetchUsers();

  return useQuery({ queryKey: ["vehicles"], queryFn: getVehicles });
};

export default useVehiclesQuery;
