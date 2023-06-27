// import useDepartmentQuery from "../../hooks/useDepartmentQuery";
import { useGlobalContext } from "../../contextAPI";
import Wrapper from "../../styleWrappers/stylesRegisterMaintenanceItem";
// import useMaintenanceQuery from "./useMaintenanceQuery";
import useVehiclesQuery from "../vehicles/useVehiclesQuery";
// import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import supabase from "../../config/supabaseClient";
import { toast } from "react-hot-toast";

// import useVehiclesQuery from "../vehicles/useVehiclesQuery";

// ================================================== Add A New Maintenance Instance ================================================ //

const RegisterMaintenanceItem = () => {
  const { registerMaintenance, setRegisterMaintenance } = useGlobalContext();
  const { data = [] } = useVehiclesQuery();

  const queryClient = useQueryClient();
  // const navigate = useNavigate();

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
      onSuccess: () => {
        toast.success("Your Booking Was Successful");
        // setTimeout(() => navigate("/dashboard"), 3000);
        // setRegisterMaintenance("");
        queryClient.invalidateQueries({
          queryKey: ["maintenance"],
        });
      },
    }
  );

  const newMaintenance = [];
  for (const { name, registration, department } of data) {
    if (department.name) {
      const destructedData = {
        name,
        registration,
        department: department.name,
      };

      newMaintenance.push(destructedData);
    }
  }

  const handleChange = (e) => {
    setRegisterMaintenance((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
    console.log(registerMaintenance);
  };

  const vehicles = newMaintenance.filter(
    (item) => item.department === registerMaintenance.department
  );

  // console.log(vehicles);
  const handleFileChange = () => {};

  const departments = Array.from(
    new Set(newMaintenance.map((item) => item.department))
  );

  return (
    <Wrapper>
      <h1 className="section_title_global">Create Maintenance Event</h1>
      <main className="section_global">
        <form className="form_global" onSubmit={handleSubmit}>
          <label>Department</label>
          <select name="department" onChange={handleChange}>
            <option value="" selected>
              Choose an option
            </option>
            {departments.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          <label>Vehicle</label>
          <select name="vehicle" onChange={handleChange}>
            <option value="" selected>
              Choose an option
            </option>
            {vehicles.map((item, index) => {
              return <option key={index}>{item.name}</option>;
            })}
          </select>

          <label>Vehicle registration</label>
          <select name="registration" onChange={handleChange}>
            <option selected>Choose an option</option>
            {vehicles.map((item, index) => {
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
            onChange={handleFileChange}
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
