import { useGlobalContext } from "../../contextAPI";
import supabase from "../../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../../styleWrappers/stylesBookingTable";
import { format } from "date-fns";
import DataTable from "react-data-table-component";

const BookingTablev2 = () => {
  const { bookingsData, setBookingsData } = useGlobalContext();

  const bookingData = async () => {
    try {
      const { data, error } = await supabase
        .from("booking")
        .select(
          "created_at,reason, start_date, return_date, vehicles(name, model,registration)"
        );
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

  // Add simple functionality to the table using react-data-table npm package
  // format(new Date(created_at), "dd/MM/yyyy"));

  bookingsData.forEach((obj) => {
    obj.created_at = format(new Date(obj.created_at), "yyyy/MM/dd");
  });

  const columns = [
    {
      name: "Created",
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
    },
    {
      name: "Start Date",
      selector: (row) => row.start_date,
      sortable: true,
    },
    {
      name: "Return Date",
      selector: (row) => row.return_date,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Model",
      selector: (row) => row.model,
    },
    {
      name: "Registration",
      selector: (row) => row.registration,
    },
    {
      name: "Driver",
      selector: (row) => row.driver,
    },
  ];

  const data = bookingsData;
  return (
    <Wrapper>
      <main className="section">
        <DataTable
          columns={columns}
          data={data}
          pagination
          className="table-global"
          customStyles={customStyles}
        />
      </main>
    </Wrapper>
  );
};

const customStyles = {
  rows: {
    style: { width: "100%" },
  },

  headCells: {
    style: {
      fontSize: "1.5rem",
      fontWeight: "700",
      backgroundColor: "#d2d3d3",
      color: "#6d6d6d;",
      padding: "1.2rem",
    },
  },
  header: {
    style: {
      backgroundColor: "#d2d3d3",
    },
  },
  cells: {
    style: { backgroundColor: "#f8f6f4" },
  },
};

export default BookingTablev2;
