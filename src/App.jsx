// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Register,
  Booking,
  Return,
  Vehicles,
  TripInfo,
} from "./pages/index";
import Home from "../src/pages/Home";
import { Navbar, Sidebar } from "./components";
import { useGlobalContext } from "./contextAPI";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { token } = useGlobalContext();

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        {token ? <Route path="dashboard" element={<Dashboard />} /> : ""}
        {token ? <Route path="booking" element={<Booking />} /> : ""}
        {token ? <Route path="return" element={<Return />} /> : ""}
        {token ? <Route path="vehicles" element={<Vehicles />} /> : ""}
        {token ? <Route path="tripinfo" element={<TripInfo />} /> : ""}
        <Route path="register" element={<Register />} />
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
  );
};

export default App;
