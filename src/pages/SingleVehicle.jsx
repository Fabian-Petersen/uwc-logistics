import { Link, useParams } from "react-router-dom";
import Wrapper from "../styleWrappers/stylesSingleVehicle";
import useVehiclesQuery from "../components/vehicles/useVehiclesQuery";
import ProductImages from "../components/vehicles/ProductImages";
import Spinner from "../components/features/Spinner";

const SingleVehicle = () => {
  const { vehicleId } = useParams();
  const { data: vehicles = [], isLoading, error } = useVehiclesQuery();

  console.log(vehicleId);
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  const singleVehicle = [
    vehicles.find((item) => item.id === parseInt(vehicleId)),
  ];

  console.log(singleVehicle);

  const { name, registration, model } = singleVehicle[0];
  return (
    <Wrapper>
      <h1 className="section_title_global">
        <Link className="link" to="/vehicles">
          <button className="btn-global">Back to Vehicles</button>
        </Link>
        {name} {model} / Registration: {registration}
      </h1>
      <main className="section_global">
        {singleVehicle.map((vehicle) => {
          const {
            id,
            name,
            registration,
            year,
            model,
            license_renewal,
            service_due,
            fuel,
            transmission,
            start_km: kilometers,
            images,
            department,
          } = vehicle;
          return (
            <div key={id} className="container">
              <ProductImages images={images} />
              <div className="vehicleDetails">
                <h2 className="title_subheading">Vehicle Details</h2>
                <div className="infoContainer">
                  <ul className="text">
                    <li>Department:</li>
                    <li>Vehicle:</li>
                    <li>Registration:</li>
                    <li>Year:</li>
                    <li>Fuel:</li>
                    <li>Transmission:</li>
                    <li>Kilometers:</li>
                    <li>Service Due:</li>
                    <li>License Renewal:</li>
                  </ul>
                  <ul className="data">
                    <li>{department.name}</li>
                    <li>
                      {name} {model}
                    </li>
                    <li>{registration}</li>
                    <li>{year}</li>
                    <li>{fuel}</li>
                    <li>{transmission}</li>
                    <li>{kilometers} km</li>
                    <li>{service_due}</li>
                    <li>{license_renewal}</li>
                  </ul>
                </div>
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
