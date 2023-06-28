import Wrapper from "../styleWrappers/stylesVehicles";
import VehiclesTable from "../components/vehicles/VehiclesTable";
import { useGlobalContext } from "../contextAPI";
import CreateVehicleModalMulti from "../components/vehicles/CreateVehicleModalMulti";

const Vehicles = () => {
  const { openVehicleModal } = useGlobalContext();

  return (
    <Wrapper>
      {openVehicleModal ? <CreateVehicleModalMulti /> : ""}
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
