import Wrapper from "../../styleWrappers/stylesBookingTable";
import { format } from "date-fns";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import useBookingsQuery from "./useBookingsQuery";
import Spinner from "../features/Spinner";

const BookingTablev2 = () => {
  const { data, isLoading, isError } = useBookingsQuery();

  // loop over the dates and format using date-fns
  if (data) {
    data.forEach((obj) => {
      obj.created_at = format(new Date(obj.created_at), "dd/MM/yyyy");
      (obj.start_date = format(new Date(obj.start_date), "dd/MM/yyyy")),
        (obj.return_date = format(new Date(obj.return_date), "dd/MM/yyyy"));
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (data === []) return <h2>There are no bookings at the moment....</h2>;

  if (isError) {
    return <h2>Error loading bookings....</h2>;
  }

  // ===================================================== Destructure the bookings object ========================================= //
  const newBookings = [];

  for (const {
    created_at,
    reason,
    start_date,
    return_date,
    vehicles,
  } of data) {
    if (vehicles && vehicles.name && vehicles.model && vehicles.registration) {
      const destructedData = {
        created_at,
        reason,
        start_date,
        return_date,
        name: vehicles.name,
        model: vehicles.model,
        registration: vehicles.registration,
      };

      newBookings.push(destructedData);
    }
  }

  if (!data || data.length === 0) {
    toast.error("data cannot be retrieved");
    return <h2>Data Cannot Be Retrieved</h2>;
  }

  // ================================================== Construct the columns for using the react data table with the newBookings array ========================= //

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
      <Spinner />
      <DataTable
        columns={columns}
        data={newBookings}
        pagination
        className="table_global"
        customStyles={customStyles}
      />
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
      backgroundColor: "rgba(10, 110, 189, 0.85)",
      color: "#fff;",
      padding: "1.2rem",
    },
  },
  header: {
    style: {
      backgroundColor: "rgba(10, 110, 189, 0.85)",
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
