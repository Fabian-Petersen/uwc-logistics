import Wrapper from "../styleWrappers/stylesBookings";
// import BookingTable from "../components/BookingTable";
import BookingTablev2 from "../components/BookingTablev2";

const Bookings = () => {
  return (
    <Wrapper>
      <h1 className="section_title">Booking Information</h1>
      <main className="section-global">
        <BookingTablev2 />
      </main>
    </Wrapper>
  );
};
export default Bookings;
