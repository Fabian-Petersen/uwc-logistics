import Wrapper from "../styleWrappers/stylesTrips";
import { useGlobalContext } from "../contextAPI";

const TripInfo = () => {
  const { vehicles } = useGlobalContext();

  const handleSubmit = () => {
    console.log(vehicles);
  };

  return (
    <Wrapper>
      <h1 className="section_title">Trips</h1>
      <main className="trips_container section">
        <form onSubmit={handleSubmit} className="form_style"></form>
      </main>
    </Wrapper>
  );
};

export default TripInfo;
