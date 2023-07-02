import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";

const useGetUserQuery = () => {
  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.log(error.message);
    }

    return data;
  };

  const { data, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { error, data };
};

export default useGetUserQuery;
