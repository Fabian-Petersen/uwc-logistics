import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../../contextAPI";

const useLoginUserQuery = () => {
  const { token } = useGlobalContext();
  console.log(token);
  const getUser = async () => {
    const { data: user, error } = await supabase.auth.getUser();

    if (user) {
      console.log(user);
    }

    if (error) {
      console.log("user cannot be retrieved");
    }
    return user;
  };

  // function prefetchBookings() {
  //   return queryClient.prefetchQuery({
  //     queryKey: ["user"],
  //     queryFn: getUser,
  //   });
  // }

  // prefetchBookings();

  return useQuery({ queryKey: ["user"], queryFn: getUser });
};

export default useLoginUserQuery;
