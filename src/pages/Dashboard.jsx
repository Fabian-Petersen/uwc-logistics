import Wrapper from "../styleWrappers/stylesDashboard";
import supabase from "../config/supabaseClient";
// import { useVehicles } from "../services/useVehicles";
import { useGlobalContext } from "../contextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../assets/data/icons";

const Dashboard = () => {
  const { faClipboard } = icons;
  // const { bookingsData } = useGlobalContext();

  // const bookingInfo = bookingsData.length;
  // console.log(bookingInfo);
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
  // console.log(bookingsData);
  return (
    <Wrapper>
      <h1 className="section_title">Dashboard</h1>
      <main className="section-global">
        <div className="dashboard">
          {/* <h2>Welcome {token.user.user_metadata.name}</h2> */}
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
          </div>
          <div className="graph-container">
            <div className="lineGraph"></div>
            <div className="pieChart"></div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
