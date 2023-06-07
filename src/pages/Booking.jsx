import Wrapper from "../styleWrappers/stylesBooking";
import { useGlobalContext } from "../contextAPI";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { vehicles, booking, setBooking, token } = useGlobalContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBooking((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
        driver: token.user.user_metadata.name,
      };
    });
  };

  console.log(booking);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("booking").insert(booking);

      if (data) {
        console.log(data);
      }

      if (error) throw Error;
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard");
    setBooking("");
  };

  return (
    <Wrapper>
      <main className="booking_Container">
        <form onSubmit={handleSubmit}>
          <h1>Book Vehicle</h1>
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
              <label htmlFor="vehicle">Reason</label>
              <input
                required
                type="text"
                name="reason"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="startDate flex_column">
              <label>Start Date</label>
              <input
                placeholder="Enter Start Kilometers"
                required
                type="date"
                name="start_date"
                onChange={handleChange}
              />
            </div>
            <div className="flex_column">
              <label htmlFor="endDate">End Date</label>
              <input
                required
                type="date"
                name="end_date"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="time flex_column">
              <label htmlFor="startTime">Start Time</label>
              <input type="time" name="start_time" onChange={handleChange} />
            </div>
            <div className="flex_column">
              <label htmlFor="endTime">End Time</label>
              <input type="time" name="end_time" onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="flex_column">
              <label htmlFor="start_km">Start Kilometers</label>
              <input name="start_km" onChange={handleChange} />
            </div>
            <div className="flex_column">
              <label htmlFor="end_km">End Kilometers</label>
              <input required name="end_km" onChange={handleChange} />
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

export default Booking;