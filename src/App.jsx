// import Pages";
import {
  Dashboard,
  Register,
  CreateBooking,
  Return,
  Vehicles,
  Bookings,
  SingleVehicle,
} from "./pages/index";
import Home from "../src/pages/Home";
import { Navbar, Sidebar } from "./components";
import { useGlobalContext } from "./contextAPI";

//3rd party libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  const { token } = useGlobalContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          {token ? <Route path="dashboard" element={<Dashboard />} /> : ""}
          {token ? (
            <Route path="createbooking" element={<CreateBooking />} />
          ) : (
            ""
          )}
          {token ? <Route path="return" element={<Return />} /> : ""}
          {token ? <Route path="vehicles" element={<Vehicles />} /> : ""}
          {token ? <Route path="bookings" element={<Bookings />} /> : ""}
          <Route path="register" element={<Register />} />
          <Route path="vehicles/:vehicleId" element={<SingleVehicle />} />
        </Routes>
        <Toaster
          position="top-center"
          gutter={15}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            duration: 3000,
            success: {
              duration: 1500,
            },
            error: { duration: 2000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--clr-bg-form)",
              color: "var(--clr-font-dark)",
            },
          }}
        />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
