import Wrapper from "../../styleWrappers/stylesMaintenanceTable";
import { format } from "date-fns";
import DataTable from "react-data-table-component";
// import { toast } from "react-hot-toast";
import useMaintenanceQuery from "./useMaintenanceQuery";
import Spinner from "../features/Spinner";

const MaintenanceTable = () => {
  const { data = [], isLoading, isError, error } = useMaintenanceQuery();

  // console.log(data);

  //   loop over the dates and format using date-fns
  if (data) {
    data.forEach((obj) => {
      obj.created_at = format(new Date(obj.created_at), "dd/MM/yyyy");
      obj.date = format(new Date(obj.date), "dd/MM/yyyy");
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h2>Error loading maintenance....</h2>;
  }

  if (error) {
    console.log(error);
  }

  // ===================================================== Destructure the bookings object ========================================= //
  const newMaintenance = [];

  for (const {
    created_at,
    date,
    vendor,
    cost,
    type,
    // vehicle,
    // registration,
    // department,
    vehicles,
  } of data) {
    console.log(data);
    if (
      vehicles &&
      vehicles.name &&
      vehicles.registration &&
      vehicles.department.name
    ) {
      const destructedData = {
        created_at,
        date,
        vendor,
        cost,
        type,
        // vehicle,
        // registration,
        // department,
        name: vehicles.name,
        registration: vehicles.registration,
        department: vehicles.department.name,
      };
      newMaintenance.push(destructedData);
    }
  }

  console.log(newMaintenance);

  //   if (newMaintenance === 0) {
  // toast.error("data cannot be retrieved");
  // return <h2>Data Cannot Be Retrieved</h2>;
  //   }

  // ================================================== Construct the columns for using the react data table with the newBookings array ========================= //

  const columns = [
    {
      name: "Created",
      selector: (row) => row.created_at,
      sortable: true,
      width: "12rem",
    },
    {
      name: "Date",
      selector: (row) => row.date,
      width: "12rem",
    },
    {
      name: "Vehicle",
      selector: (row) => row.name,
      sortable: true,
      width: "15rem",
    },
    {
      name: "registration",
      selector: (row) => row.registration,
      width: "15rem",
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
      width: "20rem",
    },
    {
      name: "department",
      selector: (row) => row.department,
      sortable: true,
      width: "30rem",
    },
    {
      name: "vendor",
      selector: (row) => row.vendor,
      sortable: true,
      width: "25rem",
    },
    {
      name: "cost",
      selector: (row) => "R " + row.cost,
    },
  ];

  return (
    <Wrapper>
      <DataTable
        columns={columns}
        data={newMaintenance}
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
    style: { backgroundColor: "#f8f6f4", fontSize: "1.2rem" },
  },
};

export default MaintenanceTable;
