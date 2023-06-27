import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useVehiclesQuery = () => {
  // const queryClient = useQueryClient();

  const getVehicles = async () => {
    const { data, error } = await supabase
      .from("vehicles")
      .select(
        "created_at, name, model, year, registration, start_km, images, department(name)"
      );

    if (error) {
      console.error(error);
      throw new Error("vehicles could not be loaded");
    }

    return data;
  };

  // function prefetchUsers() {
  //   return queryClient.prefetchQuery({
  //     queryKey: ["vehicles"],
  //     queryFn: getVehicles,
  //   });
  // }

  // prefetchUsers();

  const { isLoading, error, data } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });
  return { isLoading, error, data };
};

export default useVehiclesQuery;
