import { Link, useParams } from "react-router-dom";
import Wrapper from "../styleWrappers/stylesSingleVehicle";
// import { useGlobalContext } from "../contextAPI";
import { useVehicles } from "../services/useVehicles";

const SingleVehicle = () => {
  const { vehicleId } = useParams();
  const { vehicles } = useVehicles();

  const singleVehicle = vehicles.find(
    (item) => item.id === parseInt(vehicleId)
  );
  // console.log(singleVehicle);
  const { name, model } = singleVehicle;
  return (
    <Wrapper>
      <h1 className="section_title">
        Single Vehicle / {name} {vehicleId}
      </h1>
      <ul>
        <li>{name}</li>
        <li>{model}</li>
        {/* <li>{registration}</li>
        <li>{year}</li> */}
      </ul>
      <main>
        <Link className="link" to="/vehicles">
          <button className="btn-global">Back to Vehicles</button>
        </Link>
      </main>
    </Wrapper>
  );
};

export default SingleVehicle;
