import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useMaintenanceQuery = () => {
  // const queryClient = useQueryClient();

  const getMaintenance = async () => {
    const { data, error } = await supabase
      .from("maintenance")
      .select(
        "created_at, date, type, vendor, cost, vehicles(name, registration, department(name))"
      );

    if (error) {
      console.error(error);
      throw new Error("maintenance records Could Not be loaded");
    }

    return data;
  };

  // function prefetchBookings() {
  //   return queryClient.prefetchQuery({
  //     queryKey: ["bookings"],
  //     queryFn: getBookings,
  //   });
  // }

  // prefetchBookings();

  const { isLoading, data, isError, error, isPreviousData } = useQuery({
    queryKey: ["maintenance"],
    queryFn: getMaintenance,
    // enabled: false,
  });

  return { data, isLoading, error, isError, isPreviousData };
};

export default useMaintenanceQuery;
