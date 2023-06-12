import Wrapper from "../styleWrappers/stylesDashboard";
import supabase from "../config/supabaseClient";

import { useGlobalContext } from "../contextAPI";

const Dashboard = () => {
  const { token, bookingsData, setBookingsData } = useGlobalContext();

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
  console.log(bookingsData);
  return (
    <Wrapper>
      <h1 className="section_title">Dashboard</h1>
      <main className="dashboard_container section">
        <div className="bookingTable">
          {bookingsData.map((booking) => {
            const { id, created_at, reason, vehicle } = booking;
            return (
              <ul key={id}>
                <li>{created_at}</li>
                <li>{reason}</li>
                <li>{vehicle}</li>
              </ul>
            );
          })}
        </div>

        <h2>Welcome {token.user.user_metadata.name}</h2>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
