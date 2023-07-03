// import supabase from "../../config/supabaseClient";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const useRegisterQuery = (registerUser) => {
//   const navigate = useNavigate();

//   const { mutate } = useMutation(
//     async (registerUser) => {
//       console.log(registerUser);
//       const { data, error } = await supabase.auth.signUp({
//         email: registerUser.email,
//         password: registerUser.password,
//       });

//       if (error) {
//         toast.error("Error Registering user, contact administrator");
//         console.log(error.message);
//         console.log(data);
//       }

//       return data;
//     },
//     {
//       onSuccess: (data) => {
//         if (data.user && data.session !== null) {
//           toast.success("Registration Successfull, Please Login");
//           navigate("/");
//           setRegisterUser("");
//         }
//       },
//       onError: (error) => {
//         console.error("Mutation failed:", error);
//       },
//     }
//   );

//   console.log("form2:", register);

//   return { isLoading, error, data };
// };

// export default useRegisterQuery;
