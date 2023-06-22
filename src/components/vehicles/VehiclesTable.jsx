import { useGlobalContext } from "../../contextAPI";
import { toast } from "react-hot-toast";
import Wrapper from "../../styleWrappers/stylesVehiclesTable";
import supabase from "../../config/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const VehiclesTable = () => {
  const { vehicles, setOpenVehicleModal } = useGlobalContext();
  const queryClient = useQueryClient();
  // const { vehicleId } = useParams();

  const handleDelete = async (id) => {
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
      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },
  });

  return (
    <Wrapper>
      <main>
        <table className="table_global">
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
        </table>
      </main>
    </Wrapper>
  );
};

export default VehiclesTable;
