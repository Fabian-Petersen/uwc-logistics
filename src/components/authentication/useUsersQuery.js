import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../features/Spinner";

const useUsersQuery = () => {
  // const queryClient = useQueryClient();

  const getUsers = async () => {
    const { data, error, isLoading } = await supabase
      .from("users")
      .select(
        "name, userType, category, staff_id, student_id,userId, email, department(name)"
      );

    if (isLoading) {
      return Spinner;
    }

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

  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};

export default useUsersQuery;
