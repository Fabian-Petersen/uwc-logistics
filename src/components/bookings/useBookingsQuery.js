import supabase from "../../config/supabaseClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useBookingsQuery = () => {
  const queryClient = useQueryClient();

  const getBookings = async () => {
    const { data, error } = await supabase
      .from("booking")
      .select(
        "created_at, reason, return_date, start_date,  vehicles(name, registration, model)"
      );

    if (error) {
      console.error(error);
      throw new Error("bookings Could Not be loaded");
    }

    return data;
  };

  function prefetchBookings() {
    return queryClient.prefetchQuery({
      queryKey: ["bookings"],
      queryFn: getBookings,
    });
  }

  prefetchBookings();

  return useQuery({ queryKey: ["bookings"], queryFn: getBookings });
};

export default useBookingsQuery;
