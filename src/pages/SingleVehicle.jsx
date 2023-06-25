import { Link, useParams } from "react-router-dom";
import Wrapper from "../styleWrappers/stylesSingleVehicle";
// import { useGlobalContext } from "../contextAPI";
import useVehiclesQuery from "../components/vehicles/useVehiclesQuery";
import ProductImages from "../components/vehicles/ProductImages";

const SingleVehicle = () => {
  const { vehicleId } = useParams();
  const { data: vehicles } = useVehiclesQuery();

  const singleVehicle = [
    vehicles.find((item) => item.id === parseInt(vehicleId)),
  ];

  const { name: vehicleName } = singleVehicle[0];

  return (
    <Wrapper>
      <h1 className="section_title_global">{vehicleName}</h1>
      <main className="section_global">
        {singleVehicle.map((vehicle) => {
          const {
            name,
            id,
            registration,
            year,
            model,
            start_km: kilometers,
          } = vehicle;
          return (
            <div key={id} className="container">
              <ProductImages />
              <div className="infoContainer">
                <ul className="text">
                  <li>Vehicle:</li>
                  <li>Registration:</li>
                  <li>Year:</li>
                  <li>Kilometers:</li>
                </ul>
                <ul className="data">
                  <li>
                    {name} {model}
                  </li>
                  <li>{registration}</li>
                  <li>{year}</li>
                  <li>{kilometers} km</li>
                </ul>
                <Link className="link" to="/vehicles">
                  <button className="btn-global">Back to Vehicles</button>
                </Link>
              </div>
            </div>
          );
        })}
      </main>
    </Wrapper>
  );
};
export default SingleVehicle;
