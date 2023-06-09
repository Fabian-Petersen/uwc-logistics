/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext, createContext } from "react";
import supabase from "./config/supabaseClient";

//$ 1. ====== Setup the useContext Hook for global state management ====== //
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [fetchError, setFetchError] = useState(null);
  const [users, setUsers] = useState([]);

  //$ 2. ====== Login Component - State of the successful login token, initial value false ====== //
  const [token, setToken] = useState(false);

  //$ 3. ====== Register Component - State of the user on initial registration set to null ====== //
  const [registerUser, setRegisterUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //$ 4. ====== Register Component - State of the user on initial registration set to null   ====== //
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  //$ 5. ====== Register Component - State of the user on initial registration set to null   ====== //
  const [auth, setAuth] = useState(false);

  //$ 6. ====== Navbar Component - State used to render the login button, if user loged in button will not be rendered   ====== //
  const [login, setLogin] = useState(false);

  //$ 7. ====== Login Component - State updated from the login component using the data entered by the user   ====== //
  const [userData, setUserData] = useState({ email: "", password: "" });

  //$ 8. ====== Fetch the vehicles data from supabase stored in the vehicles table ====== //
  const [vehicles, setVehicles] = useState(
    []
    //   {
    //   name: "",
    //   model: "",
    //   year: "",
    //   registration: "",
    //   start_km: "",
    //   available: true,
    // }
  );

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
        // setVehicles(data.filter((item) => item.available === true));
      }
    };
    fetchVehicles();
  }, []);

  //$ 9. ====== Store the user token in the browser storage if login successful  ====== //
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  //$ 10. ====== State to open and close the sidebar  ====== //
  const [openNav, setOpenNav] = useState(true);

  //$ 11. ====== Return Component - State to show availability of the vehicle ====== //
  const [available, setAvailable] = useState(true);

  //$ 12. ====== Booking Component - State of the initial form to book a vehicle  ====== //
  const [booking, setBooking] = useState({
    vehicle: "",
    reason: "",
    start_km: "",
    end_km: "",
    start_time: "",
    end_time: "",
    start_date: "",
    end_date: "",
    driver: "",
    available: false,
  });

  //$ 13. ====== Return Component - State of the initial form to return a vehicle  ====== //
  const [returnVehicle, setReturnVehicle] = useState({
    vehicle: "",
    end_km: "",
    end_time: "",
    driver: "",
    available: false,
  });

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
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
        openNav,
        setOpenNav,
        booking,
        setBooking,
        available,
        setAvailable,
        returnVehicle,
        setReturnVehicle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//$ 12. ====== Custom hook for global state management  ====== //
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
