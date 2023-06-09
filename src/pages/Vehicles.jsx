import Wrapper from "../styleWrappers/stylesVehicles";
import { useGlobalContext } from "../contextAPI";
import toyota from "../assets/images/toyota.jpg";
import { toast } from "react-hot-toast";

const Vehicle = () => {
  const { vehicles } = useGlobalContext();

  const handleClick = () => {
    toast.error("you clicked me");
  };

  console.log(vehicles);
  return (
    <Wrapper>
      <h1 className="section_title">Vehicles</h1>
      <main className="vehicle_container section">
        <form>
          {vehicles.map((vehicle) => {
            const { id, name, model, registration, year } = vehicle;
            return (
              <ul key={id}>
                <img src={toyota} alt={name} />
                <li>{name}</li>
                <li>{model}</li>
                <li>{registration}</li>
                <li>{year}</li>
                <div id="buttons" className="buttons">
                  <button onClick={handleClick}>edit</button>
                  <button onClick={handleClick}>delete</button>
                </div>
              </ul>
            );
          })}
        </form>
      </main>
    </Wrapper>
  );
};

export default Vehicle;
