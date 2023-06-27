import supabase from "../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useDepartmentQuery = () => {
  // const queryClient = useQueryClient();

  const getDepartments = async () => {
    const { data, error } = await supabase.from("department").select("*");

    if (error) {
      console.error(error);
      throw new Error("department records could Not be loaded");
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

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["department"],
    queryFn: getDepartments,
    // enabled: false,
  });

  return { data, isLoading, error, isError };
};

export default useDepartmentQuery;
