import Wrapper from "../styleWrappers/stylesDashboard";
// import supabase from "../config/supabaseClient";
// import { useGlobalContext } from "../contextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../assets/data/icons";
import BarChartDash from "../components/dashboard/BarChart";
import PieChartDash from "../components/dashboard/PieChartDash";
import useBookingsQuery from "../components/bookings/useBookingsQuery";
import useVehiclesQuery from "../components/vehicles/useVehiclesQuery";

const Dashboard = () => {
  const { faClipboard } = icons;
  const { data: bookings } = useBookingsQuery();
  const { data: vehicles } = useVehiclesQuery();

  return (
    <Wrapper>
      <h1 className="section_title_global">Dashboard</h1>
      <main className="section_global">
        <div className="dashboard">
          <div className="card-container">
            <div className="card">
              <h3>Total Bookings</h3>
              <FontAwesomeIcon className="icon" icon={faClipboard} />
              <p>{(bookings && bookings.length) || 0}</p>
            </div>
            <div className="card">
              <h3>Vehicles Available</h3>
              <FontAwesomeIcon className="icon" icon={faClipboard} />
              <p>{(vehicles && vehicles.length) || 0}</p>
            </div>
            <div className="card">
              <h3>Late Returns</h3>
              <FontAwesomeIcon className="icon" icon={faClipboard} />
              <p>8</p>
            </div>
            <div className="card">
              <h3>Violations</h3>
              <FontAwesomeIcon className="icon" icon={faClipboard} />
              <p>20</p>
            </div>
            <div className="card">
              <h3>Maintenance Requests</h3>
              <FontAwesomeIcon className="icon" icon={faClipboard} />
              <p>7</p>
            </div>
          </div>
          <div className="graph-container">
            <BarChartDash className="barChart" />
            <div className="small-charts">
              <PieChartDash className="pieChart" />
              <PieChartDash className="pieChart" />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
