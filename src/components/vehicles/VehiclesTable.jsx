// import { useGlobalContext } from "../../contextAPI";
import { toast } from "react-hot-toast";
import Wrapper from "../../styleWrappers/stylesVehiclesTable";
import supabase from "../../config/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { Link } from "react-router-dom";
import useVehiclesQuery from "./useVehiclesQuery";
import Spinner from "../features/Spinner";
// import { useGlobalContext } from "../../contextAPI";
import DataTable from "react-data-table-component";
import { useState } from "react";

const VehiclesTable = () => {
  const {
    data: vehicles = [],
    error: dataError,
    isLoading,
  } = useVehiclesQuery();
  const queryClient = useQueryClient();

  const [selectedRows, setSelectedRows] = useState(0);
  // const [toggleCleared, setToggleCleared] = useState(false);

  const handleDelete = async (id) => {
    console.log("you clicked me");
    // const deleteId = selectedRows.map((row) => row.id);
    mutate("");

    const { data, error } = await supabase
      .from("vehicles")
      .delete()
      .eq("id", id);
    if (data) {
      toast.success("Vehicle Successfully Deleted");
      // setVehicles(data);
    }
    if (error) {
      toast.error("Cannot Delete Vehicle");
      console.log(error);
      return;
    }
    return data;
  };

  // update the data of vehicles once a vehicle was deleted using onSuccess and invalidate queries
  const { mutate } = useMutation({
    mutationFn: (id) => handleDelete(id),
    onSuccess: () => {
      toast.success("Vehicle Successfully Deleted");
      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },
  });

  const handleRowSelected = ({ selectedRows }) => {
    console.log("selected Rows:", selectedRows);
    setSelectedRows(selectedRows);
    console.log(selectedRows);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (dataError) {
    console.log(dataError);
  }

  // ======================================= Download the vehicles Data =================================== //
  // const actionsMemo = useMemo(
  //   () => <Export onExport={() => downloadCSV(vehicles)} />,
  //   []
  // );

  // ======================================= Vehicle Table Columns =================================== //
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Model",
      selector: (row) => row.model,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Kilometers",
      selector: (row) => row.start_km,
      sortable: true,
    },
    {
      name: "Registration",
      selector: (row) => row.registration,
    },
  ];

  return (
    <Wrapper>
      <main>
        <button
          id="actionButton"
          className={
            selectedRows.length > 0 ? "showButton btn-global" : "hideButton"
          }
          onClick={handleDelete}
        >
          {selectedRows.length > 1 ? "Delete Rows" : "Delete Row"}
        </button>
        <DataTable
          className="table_global"
          title="Vehicles"
          columns={columns}
          data={vehicles}
          selectableRows
          pagination
          customStyles={customStyles}
          onSelectedRowsChange={handleRowSelected}
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

/* <table className="table_global">
<thead className="tableHeadings">
<tr>
<td scope="col">Name</td>
<td scope="col">Model</td>
<td scope="col">Year</td>
<td scope="col">Kilometers</td>
<td scope="col">Registration</td>
<td scope="col">Functions</td>
</tr>
</thead>
<tbody>
{vehicles.map((item) => {
  const { name, id, model, year, start_km, registration } = item;
  return (
    <tr key={id} className="tableRows">
    <td>{name}</td>
    <td>{model}</td>
    <td>{year}</td>
    <td>{start_km} km</td>
    <td>{registration}</td>
    <td className="buttons-container">
    <button
    className="btn-global btn-vehicle-fns"
    onClick={() => mutate(id)}
    >
    delete
    </button>
    <Link to={`/vehicles/${id}`}>
    <button className="btn-global btn-vehicle-fns">
    View
    </button>
    </Link>
    </td>
    </tr>
    );
  })}
  <tr className="btn-container">
  <td colSpan="8">
  <button
  className="btn-global btn-vehicleTable"
  onClick={() => setOpenVehicleModal(true)}
  >
  Add Vehicle
  </button>
  </td>
  </tr>
  </tbody>
  </table> */

//? fetching and deleting column logic //
// const handleDelete = async (id) => {
//   const { data, error } = await supabase
//     .from("vehicles")
//     .delete()
//     .eq("id", id);

//   if (data) {
//     toast.success("Vehicle Successfully Deleted");
//     // setVehicles(data);
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
//     queryClient.invalidateQueries({
//       queryKey: ["vehicles"],
//     });
//   },
// });
