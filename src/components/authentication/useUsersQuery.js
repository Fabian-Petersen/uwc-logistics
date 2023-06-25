import supabase from "../../config/supabaseClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useUsersQuery = () => {
  const queryClient = useQueryClient();

  const getUsers = async () => {
    const { data, error } = await supabase
      .from("users")
      .select(
        "name, userType, category, staff_id, student_id,userId, email, department(name)"
      );

    if (error) {
      console.error(error);
      throw new Error("users could not be loaded");
    }

    return data;
  };

  function prefetchUsers() {
    return queryClient.prefetchQuery({
      queryKey: ["users"],
      queryFn: getUsers,
    });
  }

  prefetchUsers();

  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};

export default useUsersQuery;
