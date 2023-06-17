import Wrapper from "../styleWrappers/stylesCreateBooking";
import { useGlobalContext } from "../contextAPI";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const CreateBooking = () => {
  const {
    createNewBooking,
    setCreateNewBooking,
    token,
    setVehicles,
    vehicles,
  } = useGlobalContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const fetchVehicles = async () => {
    const { data, error } = await supabase.from("vehicles").select("*");

    if (data) {
      setVehicles(data);
      // setVehicles(data.filter((item) => item.available === true));
    }

    if (error) {
      console.log(error);
    }
    return data;
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
        driver: token.user.user_metadata.name,
      };
    });
    console.log(createNewBooking);
  };

  const { mutate } = useMutation(
    async (newData) => {
      const { data, error } = await supabase.from("booking").insert(newData);

      if (error) {
        throw new Error();
      }

      return data;
    },
    {
      onSuccess: () => {
        toast.success("Your Booking Was Successful");
        setTimeout(() => navigate("/dashboard"), 3000);
        setCreateNewBooking("");
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = createNewBooking;
    mutate(newData);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data, error } = await supabase
  //       .from("booking")
  //       .insert(createNewBooking);

  //     if (data) {
  //       console.log(data);
  //       toast.success("Success");
  //     }

  //     if (error) {
  //       console.log(error);
  //     }

  //     return data;
  //    setTimeout(() => navigate("/dashboard"), 3000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Wrapper>
      <h1 className="section_title_global">Book Vehicle</h1>
      <main className="section_global">
        <form onSubmit={handleSubmit}>
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
            <div className="returnDate flex_column">
              <label>Return Date</label>
              <input
                placeholder="Enter Return Date"
                required
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
