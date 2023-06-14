import { useGlobalContext } from "../contextAPI";
import supabase from "../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../styleWrappers/stylesBookingTable";
import { format } from "date-fns";

const BookingTable = () => {
  const { bookingsData, setBookingsData } = useGlobalContext();

  const bookingData = async () => {
    try {
      const { data, error } = await supabase.from("booking").select("*");

      if (data) {
        setBookingsData(data);
      }
      if (error) throw Error;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useQuery({
    queryKey: ["bookings"],
    queryFn: bookingData,
  });

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
          {bookingsData.map((booking) => {
            const {
              id,
              created_at,
              reason,
              vehicle,
              driver,
              start_time,
              end_time,
            } = booking;
            const formattedDate = format(new Date(created_at), "dd/MM/yyyy");
            {
              /* const formattedTimeStart = format(
              new Date(`1970-01-01T${start_time}.000Z`),
              "hh:mm"
            );
              const formattedTimeEnd = format(
                new Date(`2018-09-01T${end_time}.386Z`),
                "hh:mm"
              );
              {/* console.log(formattedTimeEnd); */
            }

            {
              /* } */
            }
            return (
              <tbody key={id}>
                <tr className="tableRows">
                  <td>{formattedDate}</td>
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
