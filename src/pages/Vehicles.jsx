import Wrapper from "../styleWrappers/stylesVehicles";
import VehiclesTable from "../components/VehiclesTable";
import supabase from "../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../contextAPI";
import { toast } from "react-hot-toast";
import AddVehicleModal from "../components/AddVehicleModal";

import { useMutation } from "@tanstack/react-query";

const Vehicles = () => {
  const { setFetchError, setVehicles, openVehicleModal, setOpenVehicleModal } =
    useGlobalContext();
  // const queryClient = useQueryClient();

  const fetchVehicles = async () => {
    const { data, error } = await supabase.from("vehicles").select("*");

    if (data) {
      setFetchError(false);
      setVehicles(data);
      console.log(data);
      // setVehicles(data.filter((item) => item.available === true));
    }

    if (error) {
      toast.error("Cannot retrieve vehicles list");
      setVehicles(null);
      console.log(error);
    }
    return data;
  };

  useQuery({
    queryKey: ["vehicles"],
    queryFn: fetchVehicles,
  });

  // ================================================== Add A New Vehicle ================================================ //

  const addVehicle = async (id) => {
    setOpenVehicleModal(true);

    if (openVehicleModal) {
      const { data, error } = await supabase
        .from("vehicles")
        .insert([{ id: id }]);

      if (data) {
        setFetchError(false);
        setVehicles(data);
        // console.log(data);
      }

      if (error) {
        toast.error("Cannot Add a New Vehicle");
        console.log(error);
        setOpenVehicleModal(false);
      }
    }
  };

  // Add a new vehicle and update the data using react query
  const { mutate } = useMutation({
    mutationFn: (id) => addVehicle(id),
    onSuccess: () => {
      //   queryClient.invalidateQueries({
      //     queryKey: ["vehicles"],
      //   });
    },
  });

  return (
    <Wrapper className="openModal">
      <h1 className={openVehicleModal ? "openModal" : "section_title"}>
        Vehicles
      </h1>
      {openVehicleModal ? <AddVehicleModal /> : ""}
      <main
        className={
          openVehicleModal ? "openModal" : "vehicles_container section"
        }
      >
        <VehiclesTable />
        <button className="btn-global" onClick={() => mutate()}>
          Add Vehicle
        </button>
      </main>
    </Wrapper>
  );
};

export default Vehicles;
