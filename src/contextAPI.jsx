/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext, createContext } from "react";
import supabase from "./config/supabaseClient";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [fetchError, setFetchError] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [users, setUsers] = useState([]);
  const [registerUser, setRegisterUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data, error } = await supabase.from("vehicles").select("*");

      if (error) {
        setFetchError("Cannot retrieve vehicles list");
        setVehicles(null);
        console.log(error);
      }

      if (data) {
        setFetchError(false);
        setVehicles(data);
      }
    };

    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");

      if (error) {
        setFetchError("Cannot retrieve users list");
        setUsers(null);
        console.log(error);
      }

      if (data) {
        setFetchError(false);
        setUsers(data);
      }
    };

    fetchVehicles();
    fetchUsers();
  }, []);

  // Set USer Data to the local storage for use in the app.
  if (token) {
    sessionStorage.setItem("userData", userData);
  }

  useEffect(() => {
    if (sessionStorage.getItem("userData")) {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      setUserData(userData);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        fetchError,
        setFetchError,
        vehicles,
        setVehicles,
        users,
        setUsers,
        registerUser,
        setRegisterUser,
        loginUser,
        setLoginUser,
        auth,
        setAuth,
        login,
        setLogin,
        userData,
        setUserData,
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
