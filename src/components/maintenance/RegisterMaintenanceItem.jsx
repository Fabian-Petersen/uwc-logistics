import { useGlobalContext } from "../../contextAPI";
import Wrapper from "../../styleWrappers/stylesRegisterMaintenanceItem";
// import useVehiclesQuery from "../vehicles/useVehiclesQuery.js";
// import useMaintenanceQuery from "./useMaintenanceQuery";
// import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import supabase from "../../config/supabaseClient";
import { toast } from "react-hot-toast";

// ================================================== Add A New Maintenance Instance ================================================ //

const RegisterMaintenanceItem = () => {
  const { registerMaintenance, setRegisterMaintenance, token } =
    useGlobalContext();

  //? ========================= Function Logic to to register Maintenance to be done for a vehicle ================================= //
  //$ 1. Use vehicles from the database to match to the user id to populate the vehilces in the form
  // const { vehicles } = useVehiclesQuery();

  const getVehicles = async () => {
    const { data, error } = await supabase.from("vehicles_actual").select("*");

    if (error) {
      console.error(error);
      throw new Error("vehicles could not be loaded");
    }

    // if (data) {
    //   console.log(data);
    // }

    return data;
  };

  const { data: vehicles = [] } = useQuery({
    queryKey: ["vehiclesActual"],
    queryFn: getVehicles,
  });

  // console.log(vehicles);

  //$ 2.  Get the department the user is in to match to the vehicles in the vehicles array.
  const userDepartment = token?.user?.user_metadata.department;
  console.log(userDepartment);

  //$ 3.  Get the list of vehicles in the department the user is in.
  const userDepartmentVehicles = vehicles.filter(
    (item) => item.department === userDepartment
  );

  console.log(userDepartmentVehicles);

  const queryClient = useQueryClient();
  // // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = registerMaintenance;
    mutate(newData);
    setRegisterMaintenance("");
  };

  const { mutate } = useMutation(
    async (newData) => {
      const { error } = await supabase.from("maintenance").insert(newData);

      if (error) {
        console.log(error);
      }
    },
    {
      onSuccess: (data) => {
        if (!data && data !== 0) {
          toast.success("Your Booking Was Successful");
        }
        //setTimeout(() => navigate("/dashboard"), 3000);
        // setRegisterMaintenance("");
        queryClient.invalidateQueries({
          queryKey: ["maintenance"],
        });
      },
    }
  );

  // // const newMaintenance = [];
  // // for (const { name, registration, department } of data) {
  // //   console.log(data);
  // //   if (department.name) {
  // //     const destructedData = {
  // //       name,
  // //       registration,
  // //       department: department.name,
  // //     };

  // //     newMaintenance.push(destructedData);
  // //   }
  // // }

  const handleChange = (e) => {
    setRegisterMaintenance((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
    console.log(registerMaintenance);
  };

  // //All the departments on campus.
  // console.log(allDepartments);
  // console.log(vehicles);
  // //Vehicles options available based on user department

  // console.log(userDepartmentVehicles);

  // // console.log(vehicles);
  // const handleFileChange = () => {};

  //?All the departments from the database
  // const departments = Array.from(
  //   new Set(newMaintenance.map((item) => item.department))
  // );
  console.log(registerMaintenance);
  return (
    <Wrapper>
      <main className="section_global">
        <h2 className="form_title">Create Maintenance Event</h2>
        <form className="form_global" onSubmit={handleSubmit}>
          <label>Department</label>
          <select name="department" onChange={handleChange}>
            <option value="" selected>
              Choose an option
            </option>
            {[].map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          <label>Vehicle</label>
          <select name="vehicle" onChange={handleChange}>
            <option>Choose an option</option>
            {userDepartmentVehicles.map((item, index) => {
              return (
                <option value={item.model} key={index}>
                  {item.model}
                </option>
              );
            })}
          </select>
          <label>Vehicle registration</label>
          <select name="registration" onChange={handleChange}>
            <option selected>Choose an option</option>
            {userDepartmentVehicles
              .filter((item) => item.model === registerMaintenance.vehicle)
              .map((item, index) => {
                return <option key={index}>{item.registration}</option>;
              })}
          </select>

          <label>Date of Service</label>
          <input type="date" name="date" onChange={handleChange} />

          <label>Description</label>
          <input name="type" onChange={handleChange} />

          <label>Kilometers</label>
          <input name="start_km" onChange={handleChange} />

          <label>Vendor</label>
          <input name="vendor" onChange={handleChange} />

          <label>Cost</label>
          <input name="cost" onChange={handleChange} />

          <label>Invoice</label>
          <input
            type="file"
            name="file"
            accept="/*"
            multiple
            onChange={() => {}}
          />
          <button type="submit" className="btn-global btn_main_register_submit">
            Submit
          </button>
        </form>
      </main>
    </Wrapper>
  );
};

export default RegisterMaintenanceItem;
