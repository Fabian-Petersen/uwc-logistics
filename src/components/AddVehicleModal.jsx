import { useGlobalContext } from "../contextAPI";
import Wrapper from "../styleWrappers/stylesAddVehicleModal";

const AddVehicleModal = () => {
  const { setOpenModal, setVehicles, vehicles } = useGlobalContext();
  const handleSubmit = () => {};

  const handleChange = (e) => {
    setVehicles((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
    console.log(vehicles);
  };

  return (
    <Wrapper>
      <main>
        <form onSubmit={handleSubmit}>
          <h2>Add New Vehicle</h2>
          <label>Vehicle Brand</label>
          <input type="text" name="name" onChange={handleChange} />
          <label htmlFor="model">Vehicle Model</label>

          <input type="text" name="model" onChange={handleChange} />

          <label htmlFor="year">year</label>
          <input type="date" name="year" onChange={handleChange} />

          <label htmlFor="registration">End Date</label>
          <input type="text" name="registration" onChange={handleChange} />

          <label htmlFor="start_km">Start Kilometers</label>
          <input name="start_km" onChange={handleChange} />
          <div className="flex-buttons">
            <button
              type="submit"
              className="btn-global"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn-global">
              Create Vehicle
            </button>
          </div>
        </form>
      </main>
    </Wrapper>
  );
};

export default AddVehicleModal;
