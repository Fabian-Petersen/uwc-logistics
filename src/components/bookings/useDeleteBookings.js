import supabase from "../../config/supabaseClient";
import { useMutation } from "@tanstack/react-query";
// import useAllBookingsQuery from "./useAllBookingsQuery";

const useDeleteBookings = () => {
  //$ 1. Get the data of all the bookings in the database using the allbookings hook.
  // const { data: allBookings = [] } = useAllBookingsQuery();

  //$ 2. Get the id from the bookings table to insert the id of the column to be deleted.

  //$ 3. Use the mutate function to delete the data from the booking table once a user clicks on the cancel button.
  const { mutate } = useMutation(
    async (id) => {
      const { data, error } = await supabase
        .from("booking")
        .delete()
        .eq("id", id)
        .single();

      if (error) {
        console.error(error.message);
      }
      return data;
    },
    {
      onError: (err) => {
        console.log(err.message);
      },
    }
  );
  return { mutate };
};

export default useDeleteBookings;
