import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../../contextAPI";
// import useGetUserQuery from "../authentication/useGetUserQuery";

const useBookingsQuery = () => {
  const { token } = useGlobalContext();

  const getBookings = async (userId) => {
    console.log(userId);
    if (!userId) {
      throw new Error("User ID is undefined");
    }

    const { data, error } = await supabase
      .from("booking")
      .select("*")
      .eq("user_id", userId);

    // "created_at, reason, return_date, start_date,  vehicles(name, registration, model)" // This works with the vehicles object in the returned data

    if (error) {
      console.error(error.message);
    }

    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["userBookings"],
    queryFn: () => getBookings(token?.user?.id),
  });
  return { data, isLoading, error };
};

export default useBookingsQuery;
