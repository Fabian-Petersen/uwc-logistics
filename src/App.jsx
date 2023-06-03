import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
// import Vehicles from "./components/Vehicles";
import Home from "../src/pages/Home";
import Navbar from "./components/Navbar";
// import Error from "./components/Error";
import AppProvider from "./contextAPI";
import { useGlobalContext } from "./contextAPI";

function App() {
  const { token } = useGlobalContext();
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {token ? <Route path="dashboard" element={<Dashboard />} /> : ""}
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
