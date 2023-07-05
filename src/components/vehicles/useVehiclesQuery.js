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

  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["vehiclesActual"],
    queryFn: getVehicles,
  });

  // getVehicles();

  console.log(data);
  return { isLoading, error, data, isError };
};

export default useVehiclesQuery;
