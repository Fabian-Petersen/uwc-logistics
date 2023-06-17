import Wrapper from "../styleWrappers/stylesDashboard";
import supabase from "../config/supabaseClient";
import { useGlobalContext } from "../contextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../assets/data/icons";
import BarChartDash from "../components/dashboard/BarChart";
import PieChartDash from "../components/dashboard/PieChartDash";

const Dashboard = () => {
  const { faClipboard } = icons;
  const { setBookingsData } = useGlobalContext();

  const bookingData = async () => {
    try {
      const { data, error } = await supabase.from("booking").select("*");

      if (data) {
        setBookingsData(data);
      }
      if (error) throw Error;
    } catch (error) {
      console.log(error);
    }
  };

  bookingData();
  return (
    <Wrapper>
      <h1 className="section_title_global">Dashboard</h1>
      <main className="section_global">
        <div className="dashboard">
          <div className="card-container">
            <div className="card">
              <h3>Bookings</h3>
              <FontAwesomeIcon className="icon" icon={faClipboard} />
              <p>15</p>
            </div>
            <div className="card">
              <h3>Available</h3>
              <FontAwesomeIcon className="icon" icon={faClipboard} />
              <p>2</p>
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
              <h3>Vehicles</h3>
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
