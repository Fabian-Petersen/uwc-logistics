// import { useGlobalContext } from "../../contextAPI";
// import { toast } from "react-hot-toast";
import Wrapper from "../../styleWrappers/stylesVehiclesTable";
// import supabase from "../../config/supabaseClient";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useVehiclesQuery from "./useVehiclesQuery";
import Spinner from "../features/Spinner";
import DataTable from "react-data-table-component";
// import { useParams } from "react-router-dom";

import vehicleColumns from "../../assets/data/columnsVehicleTable";

const VehiclesTable = () => {
  // const { data: vehicles } = useVehiclesQuery();
  // console.log(vehicles);

  const { data: vehicles, error, isLoading } = useVehiclesQuery();
  // const { vehicleId } = useParams();

  // const queryClient = useQueryClient();

  // const [selectedRows, setSelectedRows] = useState(0);
  // const [toggleCleared, setToggleCleared] = useState(false);

  // const handleDelete = async (id) => {
  //   console.log("you clicked me");
  //   mutate("");

  //   const { data, error } = await supabase
  //     .from("vehicles")
  //     .delete()
  //     .eq("id", id);
  //   if (data) {
  //     toast.success("Vehicle Successfully Deleted");
  //   }
  //   if (error) {
  //     toast.error("Cannot Delete Vehicle");
  //     console.log(error);
  //     return;
  //   }
  //   return data;
  // };

  // update the data of vehicles once a vehicle was deleted using onSuccess and invalidate queries
  // const { mutate } = useMutation({
  //   mutationFn: (id) => handleDelete(id),
  //   onSuccess: () => {
  //     toast.success("Vehicle Successfully Deleted");
  //     queryClient.invalidateQueries({
  //       queryKey: ["vehicles"],
  //     });
  //   },
  // });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  // ======================================= Download the vehicles Data =================================== //
  // const actionsMemo = useMemo(
  //   () => <Export onExport={() => downloadCSV(vehicles)} />,
  //   []
  // );

  // ===================================================== Destructure the Vehicles object ========================================= //
  const newVehicles = [];

  for (const { id, created_at, model, year, registration } of vehicles) {
    const destructedData = {
      id,
      created_at,
      model,
      year,
      registration,
    };

    newVehicles.push(destructedData);
  }
  // if (!data || data.length === 0) {
  //   toast.error("data cannot be retrieved");
  //   return <h2>Data Cannot Be Retrieved</h2>;
  // }

  //=========================== Columns imported from data/columnsVehicleTable ================== /

  const button = {
    name: "Action",
    cell: (row) => (
      <Link to={`/vehicles/${row.id}`}>
        <button
          className="btn-global btn-bookingsTable"
          onClick={() => console.log(row.id)}
        >
          View
        </button>
      </Link>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    width: "12rem",
  };

  const updatedColumns = [...vehicleColumns, button];

  return (
    <Wrapper>
      <main>
        <DataTable
          className="table_global"
          title="Vehicles"
          columns={updatedColumns}
          data={newVehicles}
          selectableRows
          pagination
          customStyles={customStyles}
          selectableRowsHighlight
          highlightOnHover
          pointerOnHover
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

export default VehiclesTable;
