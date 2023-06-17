// import { useGlobalContext } from "../../contextAPI";
import supabase from "../../config/supabaseClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Wrapper from "../../styleWrappers/stylesBookingTable";
import { format } from "date-fns";
import DataTable from "react-data-table-component";

const BookingTablev2 = () => {
  // const { bookingsData, setBookingsData } = useGlobalContext();

  const queryClient = useQueryClient();

  const bookingData = async () => {
    try {
      const { data, error } = await supabase
        .from("booking")
        .select(
          "created_at, reason, return_date, start_date,  vehicles(name, registration, model)"
        );
      if (data) {
        data.forEach((obj) => {
          (obj.created_at = format(new Date(obj.created_at), "dd/MM/yyyy")),
            (obj.start_date = format(new Date(obj.start_date), "dd/MM/yyyy")),
            (obj.return_date = format(new Date(obj.return_date), "dd/MM/yyyy"));
        });
      }

      if (isLoading) {
        return <h2>Loading...</h2>;
      }

      if (data === [])
        return <h2>Data cannot be retrieved at the moment....</h2>;

      if (error) throw Error;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  queryClient.prefetchQuery({
    queryKey: ["bookings"],
    queryFn: bookingData,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: bookingData,
  });

  const newBookings = [];

  for (const {
    created_at,
    reason,
    start_date,
    return_date,
    vehicles: { name, model, registration },
  } of data) {
    newBookings.push({
      created_at,
      reason,
      model,
      registration,
      start_date,
      return_date,
      name,
    });

    if (!data || data.length === 0) {
      console.log("data cannot be retrieved");
      // return <h2>Data Cannot Be Retrieved</h2>;
    }
  }

  console.log(newBookings);
  // Add simple functionality to the table using react-data-table npm package
  // format(new Date(created_at), "dd/MM/yyyy"));

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
    // {
    //   name: "Driver",
    //   selector: (row) => row.driver,
    // },
  ];

  return (
    <Wrapper>
      <main className="section">
        <DataTable
          columns={columns}
          data={newBookings}
          pagination
          className="table_global"
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
  pagination: {
    backgroundColor: "transparent",
  },
  cells: {
    style: { backgroundColor: "#f8f6f4" },
  },
};

export default BookingTablev2;
