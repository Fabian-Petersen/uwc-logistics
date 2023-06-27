import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useUsersQuery = () => {
  // const queryClient = useQueryClient();

  const getUsers = async () => {
    const { data, error } = await supabase
      .from("users")
      .select(
        "name, userType, category, staff_id, student_id,userId, email, department(name)"
      );

    if (data) {
      console.log(data);
    }
    if (error) {
      console.error(error);
      throw new Error("users could not be loaded");
    }

    return data;
  };

  // function prefetchUsers() {
  //   return queryClient.prefetchQuery({
  //     queryKey: ["users"],
  //     queryFn: getUsers,
  //   });
  // }

  // prefetchUsers();

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { data, isLoading, error };
};

export default useUsersQuery;
