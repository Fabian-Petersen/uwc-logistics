import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../../contextAPI";

const useLoginUserQuery = () => {
  const { userData } = useGlobalContext();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });

      if (data) {
        console.log(data);
      }

      if (error) throw Error;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: loginUser,
  });

  return { data, isLoading, error };
};

export default useLoginUserQuery;
