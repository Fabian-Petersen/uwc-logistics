import { useGlobalContext } from "../../contextAPI";
import Wrapper from "../../styleWrappers/stylesAddVehicleModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../config/supabaseClient";
import { toast } from "react-hot-toast";

// ================================================== Add A New Vehicle ================================================ //

const CreateVehicleModal = () => {
  const { setOpenVehicleModal, setCreateNewVehicle, createNewVehicle } =
    useGlobalContext();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setCreateNewVehicle((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { mutate } = useMutation(
    async (newData) => {
      const { data, error } = await supabase.from("vehicles").insert(newData);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    {
      onSuccess: () => {
        toast.success("Successfully Created New Vehicle");
        queryClient.invalidateQueries({ queryKey: ["vehicles"] });
        setOpenVehicleModal(false);
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = createNewVehicle;
    mutate(newData);
  };

  return (
    <Wrapper>
      <main>
        <form onSubmit={handleSubmit}>
          <h2>Add New Vehicle</h2>
          <label>Vehicle Brand</label>
          <input required type="text" name="name" onChange={handleChange} />

          <label>vehicle model</label>
          <input required type="text" name="model" onChange={handleChange} />

          <label>year</label>
          <input required type="text" name="year" onChange={handleChange} />

          <label>registration</label>
          <input
            required
            type="text"
            name="registration"
            onChange={handleChange}
          />

          <label>Start Kilometers</label>
          <input required name="start_km" onChange={handleChange} />

          <div className="flex-buttons">
            <button
              className="btn-global"
              onClick={() => setOpenVehicleModal(false)}
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

export default CreateVehicleModal;
