import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useBookingsQuery = () => {
  const getAllBookings = async () => {
    const { data, error } = await supabase.from("booking").select("*");

    if (error) {
      console.error(error.message);
    }

    // console.log("Data Returned from Server:", data);
    return data;
  };

  getAllBookings();

  const { data, isLoading, error } = useQuery({
    queryKey: ["allBookings"],
    queryFn: () => getAllBookings(),
  });
  return { data, isLoading, error };
};

export default useBookingsQuery;
