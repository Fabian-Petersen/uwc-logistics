import Wrapper from "../styleWrappers/stylesVehicles";
import VehiclesTable from "../components/vehicles/VehiclesTable";
import supabase from "../config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../contextAPI";
import { toast } from "react-hot-toast";
import CreateVehicleModal from "../components/vehicles/CreateVehicleModal";

const Vehicles = () => {
  const { setFetchError, setVehicles, openVehicleModal } = useGlobalContext();
  // const queryClient = useQueryClient();

  const fetchVehicles = async () => {
    const { data, error } = await supabase.from("vehicles").select("*");

    if (data) {
      setFetchError(false);
      setVehicles(data);
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

  return (
    <Wrapper>
      {openVehicleModal ? <CreateVehicleModal /> : ""}
      <h1 className={openVehicleModal ? "openModal" : "section_title_global"}>
        Vehicles
      </h1>
      <main className={openVehicleModal ? "openModal" : "section_global"}>
        <VehiclesTable />
      </main>
    </Wrapper>
  );
};

export default Vehicles;
