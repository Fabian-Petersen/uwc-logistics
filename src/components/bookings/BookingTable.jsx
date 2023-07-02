// import { useGlobalContext } from "../../contextAPI";
import Wrapper from "../../styleWrappers/stylesBookingTable";
// import { format } from "date-fns";
import useBookings from "../bookings/useBookings";

const BookingTable = () => {
  const { bookings } = useBookings();

  return (
    <Wrapper>
      <main className="bookingTableContainer">
        <table className="table-global">
          <thead className="tableHeadings">
            <tr>
              <td>Created</td>
              <td>Reason</td>
              <td>Vehicle</td>
              <td>Driver</td>
              <td>Start Time</td>
              <td>End Time</td>
            </tr>
          </thead>
          {bookings.map((booking) => {
            const {
              id,
              created_at: created,
              reason,
              vehicle,
              driver,
              start_time,
              end_time,
            } = booking;
            {
              /* const formattedDate = format(new Date(created_at), "dd/MM/yyyy"); */
            }
            return (
              <tbody key={id}>
                <tr className="tableRows">
                  <td>{created}</td>
                  <td>{reason}</td>
                  <td>{vehicle}</td>
                  <td>{driver}</td>
                  <td>{start_time}</td>
                  <td>{end_time}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </main>
    </Wrapper>
  );
};

export default BookingTable;
