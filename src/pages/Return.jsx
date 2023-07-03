import Wrapper from "../styleWrappers/stylesReturn";
import { useGlobalContext } from "../contextAPI";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const Return = () => {
  const { vehicles, token, returnVehicle, setReturnVehicle, setStatus } =
    useGlobalContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setReturnVehicle((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
        driver: token.user.user_metadata.name,
      };
    });
    console.log(returnVehicle);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("return")
        .insert(returnVehicle);

      if (data) {
        console.log(data);
        setStatus("available");
      }
      if (error) throw Error;
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard");
  };
  return (
    <Wrapper>
      <main className="section_global">
        <form className="form_global" onSubmit={handleSubmit}>
          <h2 className="form_title">Return Vehicle</h2>
          <div className="row">
            <div className="vehicle flex_column">
              <label>Select Vehicle</label>
              <select
                name="vehicle"
                id="vehicles"
                placeholder="select vehicle"
                onChange={handleChange}
              >
                <option value="blank"></option>
                {vehicles.map((vehicle) => {
                  const { id, registration } = vehicle;
                  return (
                    <option
                      required
                      key={id}
                      name="vehicle"
                      value={registration}
                      onChange={handleChange}
                    >
                      {registration}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex_column">
              <label htmlFor="end_km">End Kilometers</label>
              <input required name="end_km" onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="flex_column">
              <label htmlFor="endDate">End Date</label>
              <input
                required
                type="date"
                name="end_date"
                onChange={handleChange}
              />
            </div>
            <div className="flex_column">
              <label htmlFor="endTime">End Time</label>
              <input type="time" name="end_time" onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="btn-global">
            Submit
          </button>
        </form>
      </main>
    </Wrapper>
  );
};

export default Return;
