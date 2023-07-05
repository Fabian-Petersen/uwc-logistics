import supabase from "../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useDepartmentQuery = () => {
  // const queryClient = useQueryClient();

  const getDepartments = async () => {
    const { data, error } = await supabase.from("department").select("*");

    if (error) {
      console.error(error);
      throw new Error("department records could Not be loaded");
    }

    return data;
  };

  const {
    isLoading,
    data: departments,
    isError,
    error,
  } = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  return { data: departments, isLoading, error, isError };
};

export default useDepartmentQuery;
