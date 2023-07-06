import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../../contextAPI";

const useBookingsQuery = () => {
  const { token } = useGlobalContext();
  // console.log(token?.user?.id);

  const getBookings = async (userId) => {
    if (!userId) {
      throw new Error("User ID is undefined");
    }

    const { data, error } = await supabase
      .from("booking")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error(error.message);
    }

    console.log(data);
    return data;
  };

  getBookings();

  const { data, isLoading, error } = useQuery({
    queryKey: ["userBookings"],
    queryFn: () => getBookings(token?.user?.id),
  });
  return { data, isLoading, error };
};

export default useBookingsQuery;
