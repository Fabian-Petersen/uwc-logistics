import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useCheckBookingsQuery = () => {
  const checkDoubleBooking = async (booking) => {
    const { start_date, start_time, registration } = booking;

    // Query to check for double booking
    const { data, error } = await supabase
      .from("bookings")
      .select("id")
      .eq("start_date", start_date)
      .eq("start_time", start_time)
      .eq("registration", registration)
      .single();

    if (error) {
      console.error("Error checking double booking:", error);
      return false;
    }

    // If a matching booking is found, return true (double booking detected)
    return !!data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["checkBookings"],
    queryFn: () => checkDoubleBooking(),
  });
  return { data, isLoading, error };
};

export default useCheckBookingsQuery;
