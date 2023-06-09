import { useGlobalContext } from "../contextAPI";
import { Table, Button } from "react-bootstrap";

const Vehicles = () => {
  const { vehicles } = useGlobalContext();
  // console.log(vehicles);
  return (
    <div>
      <Table className="table" hover>
        <thead>
          <tr>
            <th scope="col">Created</th>
            <th scope="col">Name</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Kilometers</th>
            <th scope="col">Registration</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((item) => {
            const { name, id, model, year, start_km, registration } = item;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{model}</td>
                <td>{year}</td>
                <td>{start_km} km</td>
                <td>{registration}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button variant="primary">Primary</Button>
    </div>
  );
};

export default Vehicles;
