import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../../contextAPI";

const useVehiclesQuery = () => {
  const { token } = useGlobalContext();
  console.log(token?.user);
  const getVehicles = async (department) => {
    const { data, error } = await supabase
      .from("vehicles_actual")
      .select("*")
      .eq("department", department);

    // if (data) {
    //   console.log(department);
    // }

    if (error) {
      console.error(error);
      throw new Error("vehicles could not be loaded");
    }

    return data;
  };

  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["vehiclesActual"],
    queryFn: () => getVehicles(token?.user?.user_metadata?.department || []),
  });

  getVehicles();

  // console.log(data);
  return { isLoading, error, data, isError };
};

export default useVehiclesQuery;
