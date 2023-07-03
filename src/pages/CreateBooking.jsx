import Wrapper from "../styleWrappers/stylesCreateBooking";
import { useGlobalContext } from "../contextAPI";
import supabase from "../config/supabaseClient";
// import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const CreateBooking = () => {
  const {
    // createNewBooking,
    setCreateNewBooking,
    // token,
    setVehicles,
    vehicles,
  } = useGlobalContext();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const fetchVehicles = async () => {
    const { data, error } = await supabase.from("vehicles").select("*");

    if (data) {
      setVehicles(data);
    }

    if (error) {
      console.log(error);
    }
    return vehicles;
  };

  useQuery({
    queryKey: ["vehicles"],
    queryFn: fetchVehicles,
  });

  const handleChange = (e) => {
    setCreateNewBooking((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
        // driver: token.user.user_metadata.name,
      };
    });
  };

  const { mutate } = useMutation(
    async (newData) => {
      const { error } = await supabase.from("booking").insert(newData);

      if (error) {
        console.log(error.message);
      }

      // return data;
    },
    {
      onSuccess: () => {
        setTimeout(() => navigate("/dashboard"), 3000);
        toast.success("Your Booking Was Successful");
        setCreateNewBooking("");
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newData = createNewBooking;

    const newData = {
      vehicle: "CAA 456 346",
      reason: "Testing booking app",
      start_date: "2023-07-02",
      return_date: "2023-07-03",
      start_time: "08:00:03",
      return_time: "12:00:00",
    };

    mutate(newData);
  };

  return (
    <Wrapper>
      {/* <h1 className="section_title_global">Book Vehicle</h1> */}
      <main className="section_global">
        <form onSubmit={handleSubmit} className="form_global">
          <h2 className="form_title">Book a vehicle</h2>
          <div className="row">
            <div className="vehicle flex_column">
              <label>Select Vehicle</label>
              <select
                name="registration"
                placeholder="select vehicle"
                onChange={handleChange}
              >
                <option value="blank"></option>
                {vehicles.map((vehicle) => {
                  const { id, registration } = vehicle;
                  return (
                    <option
                      key={id}
                      // name="registration"
                      // onChange={handleChange}
                    >
                      {registration}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex_column">
              <label htmlFor="vehicle">Reason</label>
              <input type="text" name="reason" onChange={handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="startDate flex_column">
              <label>Start Date</label>
              <input
                placeholder="Enter Start Kilometers"
                type="date"
                name="start_date"
                onChange={handleChange}
              />
            </div>
            <div className="returnDate flex_column">
              <label>Return Date</label>
              <input
                placeholder="Enter Return Date"
                type="date"
                name="return_date"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="time flex_column">
              <label>Start Time</label>
              <input type="time" name="start_time" onChange={handleChange} />
            </div>
            <div className="flex_column">
              <label>Return Time</label>
              <input type="time" name="return_time" onChange={handleChange} />
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

export default CreateBooking;
