import Wrapper from "../styleWrappers/stylesCreateBooking";
import { useGlobalContext } from "../contextAPI";
import supabase from "../config/supabaseClient";
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRef } from "react";
import useVehiclesQuery from "../components/vehicles/useVehiclesQuery";
// import useAllBookingsQuery from "../components/bookings/useAllBookingsQuery";
import useUpdateBookings from "../components/bookings/useUpdateBookings";

const CreateBooking = () => {
  const formRef = useRef("");
  const { token } = useGlobalContext();
  const { data: vehicles } = useVehiclesQuery();
  // const { data: booking } = useAllBookingsQuery();
  const { mutate: updateUUID } = useUpdateBookings();
  console.log(vehicles);
  const { createNewBooking, setCreateNewBooking } = useGlobalContext();

  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setCreateNewBooking((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { mutate } = useMutation(
    async (newData) => {
      const { data, error } = await supabase.from("booking").insert(newData);

      if (error) {
        console.log(error.message);
        toast.error("Your booking was unsuccessful");
      }

      if (data) {
        console.log(data);
      }

      return data;
    },
    {
      onSuccess: (data) => {
        if (data !== null) {
          toast.success("Your Booking Was Successful");
          // setTimeout(() => navigate("/bookings"), 3000);
          // formRef.current.reset();
          setCreateNewBooking("");
          // navigate("/dashboard");
        }
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = createNewBooking;

    updateUUID(token?.user?.id);
    mutate(newData);
    // console.log(booking);
  };

  //$ Get the list of vehicles within the department of the user.
  const vehicleRegistration = vehicles.filter((item) => {
    return item.model === createNewBooking.model;
    // return item.model === newData.model;
  });

  return (
    <Wrapper>
      {/* <h1 className="section_title_global">Book Vehicle</h1> */}
      <main className="section_global">
        <form
          ref={formRef}
          id="bookingForm"
          onSubmit={handleSubmit}
          className="form_global"
        >
          <h2 className="form_title">Book a vehicle</h2>
          <div className="row">
            <div className="vehicle flex_column">
              <label>Select Vehicle</label>
              <select
                name="model"
                placeholder="select vehicle"
                onChange={handleChange}
              >
                <option value="blank"></option>
                {vehicles.map((vehicle) => {
                  const { id, model } = vehicle;
                  return (
                    <option
                      key={id}
                      // name="registration"
                      // onChange={handleChange}
                    >
                      {model}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex_column">
              <label htmlFor="vehicle">Registration</label>
              <select
                name="registration"
                placeholder="select Registration"
                onChange={handleChange}
              >
                <option value="blank"></option>
                {vehicleRegistration.map((vehicle, index) => {
                  return (
                    <option
                      key={index}
                      // name="registration"
                      // onChange={handleChange}
                    >
                      {vehicle.registration}
                    </option>
                  );
                })}
              </select>
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
          <div className="reason flex_column">
            <label>Reason</label>
            <textarea
              rows={3}
              type="text"
              name="reason"
              onChange={handleChange}
            />
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
