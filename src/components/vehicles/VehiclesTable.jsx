// import { useGlobalContext } from "../../contextAPI";
import { toast } from "react-hot-toast";
import Wrapper from "../../styleWrappers/stylesVehiclesTable";
// import supabase from "../../config/supabaseClient";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { Link } from "react-router-dom";
import useVehiclesQuery from "./useVehiclesQuery";
import Spinner from "../features/Spinner";
// import { useGlobalContext } from "../../contextAPI";
import DataTable from "react-data-table-component";

import vehicleColumns from "../../assets/data/columnsVehicleTable";

// import { useState } from "react";

const VehiclesTable = () => {
  const { data = [], error, isLoading } = useVehiclesQuery();

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

  // const handleRowSelected = ({ selectedRows }) => {
  //   console.log("selected Rows:", selectedRows);
  //   setSelectedRows(selectedRows);
  //   console.log(selectedRows);
  // };

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

  for (const {
    created_at,
    model,
    year,
    registration,
    entity,
    fuel,
    department,
  } of data) {
    if (department && department.name) {
      const destructedData = {
        created_at,
        model,
        year,
        registration,
        entity,
        fuel,
        department: department.name,
      };

      newVehicles.push(destructedData);
    }
  }

  if (!data || data.length === 0) {
    toast.error("data cannot be retrieved");
    return <h2>Data Cannot Be Retrieved</h2>;
  }

  //=========================== Columns imported from data/columnsVehicleTable ================== /
  const [...columns] = vehicleColumns;

  return (
    <Wrapper>
      <main>
        {/* <button
          id="actionButton"
          className={
            selectedRows.length > 0 ? "showButton btn-global" : "hideButton"
          }
          onClick={handleDelete}
        >
          {selectedRows.length > 1 ? "Delete Rows" : "Delete Row"}
        </button> */}
        <DataTable
          className="table_global"
          title="Vehicles"
          columns={columns}
          data={newVehicles}
          selectableRows
          pagination
          customStyles={customStyles}
          // onSelectedRowsChange={handleRowSelected}
          selectableRowsHighlight
          highlightOnHover
          pointerOnHover
          // actions={actionsMemo}
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
