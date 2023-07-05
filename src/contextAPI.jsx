import { useState, useEffect, useContext, createContext } from "react";

//$ 1. ====== Setup the useContext Hook for global state management ====== //
export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [fetchError, setFetchError] = useState(null);
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({});

  //$ 2. ====== Login Component - State of the successful login token, initial value false ====== //
  const [token, setToken] = useState(false);

  //$ 3. ====== Register Component - State of the user on initial registration set to null ====== //
  const [registerUser, setRegisterUser] = useState({
    name: "James",
    surname: "Roberts",
    role: "staff",
    department: "Campus Protection Services",
    id: "Staff3459",
    email: "test10@gmail.com",
    password: "Testing1234",
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
  const [userData, setUserData] = useState({
    email: "test11@gmail.com",
    password: "Testing1234",
  });

  //$ 8. ====== Fetch the vehicles data from supabase stored in the vehicles table ====== //
  const [vehicles, setVehicles] = useState([]);

  // State to Create a New Vehicle

  const [createNewVehicle, setCreateNewVehicle] = useState({
    name: "",
    model: "",
    year: "",
    registration: "",
    start_km: "",
    image: "",
    status: "",
  });

  //$ 9. ====== Store the user token in the browser storage if login successful  ====== //
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  //$ 10. ====== State to open and close the sidebar  ====== //
  const [openNav, setOpenNav] = useState(true);

  //$ 11. ====== Return Component - State to show availability of the vehicle ====== //
  const [status, setStatus] = useState("");

  //$ 12. ====== Booking Component - State of the initial form to book a vehicle  ====== //
  const [createNewBooking, setCreateNewBooking] = useState({
    reason: "",
    start_date: "",
    return_date: "",
    start_time: "",
    return_time: "",
    vehicleId: "",
    userId: "",
    driver: "",
    registration: "",
    status: "",
  });

  //$ 13. ====== Dashboard Component - State of the booking data stored on the server  ====== //

  const [bookingsData, setBookingsData] = useState([]);

  //$ 14. ====== Return Component - State of the initial form to return a vehicle  ====== //
  const [returnVehicle, setReturnVehicle] = useState({
    vehicle: "",
    end_km: "",
    return_time: "",
    driver: "",
    status: "",
  });

  //$ 15. ====== Register Maintenance Component - State of the initial form to register maintenance on a vehicle  ====== //
  const [registerMaintenance, setRegisterMaintenance] = useState({
    department: "",
    vehicle: "",
    registration: "",
    date: "",
    vendor: "",
    invoice: "",
    start_km: "",
    cost: "",
    type: "",
  });

  //$ 16. ====== Vehicle Modal Component - State to open and close the modal to add a new vehicle  ====== //
  const [openVehicleModal, setOpenVehicleModal] = useState(false);
  // State for the single image uplaod
  const [fileValue, setFileValue] = useState(null);
  // State for mulitple images upload
  const [fileValues, setFileValues] = useState(null);

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
        createNewBooking,
        setCreateNewBooking,
        status,
        setStatus,
        returnVehicle,
        setReturnVehicle,
        bookingsData,
        setBookingsData,
        openVehicleModal,
        setOpenVehicleModal,
        createNewVehicle,
        setCreateNewVehicle,
        fileValue,
        setFileValue,
        fileValues,
        setFileValues,
        registerMaintenance,
        setRegisterMaintenance,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//$ 16. ====== Custom hook for global state management  ====== //
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
