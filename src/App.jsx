// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Register, Booking } from "./pages/index";
import Home from "../src/pages/Home";
import { Navbar, Sidebar } from "./components";
import { useGlobalContext } from "./contextAPI";

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
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
