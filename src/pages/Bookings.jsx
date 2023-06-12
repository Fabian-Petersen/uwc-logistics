import Wrapper from "../styleWrappers/stylesBookings";
import BookingTable from "../components/BookingTable";

const Bookings = () => {
  return (
    <Wrapper>
      <h1 className="section_title">Booking Information</h1>
      <main className="trips_container section">
        <BookingTable />
      </main>
    </Wrapper>
  );
};

export default Bookings;
