import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useVehiclesQuery = () => {
  const getVehicles = async () => {
    const { data, error } = await supabase.from("vehicles_actual").select("*");

    if (error) {
      console.error(error);
      throw new Error("vehicles could not be loaded");
    }

    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["vehicles_actual"],
    queryFn: getVehicles,
  });

  return { isLoading, error, data };
};

export default useVehiclesQuery;
