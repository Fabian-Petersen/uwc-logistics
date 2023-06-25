// import { useEffect } from "react";
// import { useNavigation } from "react-router-dom";
// import useUser from "../components/authentication/useUser";

// import useLoginUserQuery from "../components/authentication/useLoginUserQuery";

const ProtectedRoute = ({ children }) => {
  // const navigate = useNavigation();
  // const { user } = useLoginUserQuery();

  // if (user) {
  return children;
  // }

  // console.log(user);
  //   const { data: user } = useUser();
  //   console.log(user);
};

export default ProtectedRoute;
