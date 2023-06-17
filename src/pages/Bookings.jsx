import Wrapper from "../styleWrappers/stylesBookings";
// import BookingTable from "../components/BookingTable";
import BookingTablev2 from "../components/bookings/BookingTablev2";

const Bookings = () => {
  return (
    <Wrapper>
      <h1 className="section_title_global">Booking Information</h1>
      <main className="section_global">
        <BookingTablev2 />
      </main>
    </Wrapper>
  );
};
export default Bookings;
