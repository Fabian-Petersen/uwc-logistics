import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useMaintenanceQuery = () => {
  // const queryClient = useQueryClient();

  const getMaintenance = async () => {
    const { data, error } = await supabase
      .from("maintenance")
      .select(
        "created_at, date, type, vendor, cost, vehicles_actual(model, registration, department(department_name))"
      );

    if (error) {
      console.error(error);
      throw new Error("maintenance records Could Not be loaded");
    }

    return data;
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["maintenance"],
    queryFn: getMaintenance,
  });

  return { data, isLoading, error, isError };
};

export default useMaintenanceQuery;
