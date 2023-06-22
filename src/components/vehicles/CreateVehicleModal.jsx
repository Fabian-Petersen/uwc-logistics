import { useGlobalContext } from "../../contextAPI";
import Wrapper from "../../styleWrappers/stylesCreateVehicleModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../config/supabaseClient";
import { toast } from "react-hot-toast";
import { supabaseUrl } from "../../config/supabaseClient";

// ================================================== Add A New Vehicle ================================================ //

const CreateVehicleModal = () => {
  const {
    setOpenVehicleModal,
    setCreateNewVehicle,
    createNewVehicle,
    setFileValue,
    fileValue,
  } = useGlobalContext();

  const handleFileChange = (e) => {
    setFileValue(e.target.files[0]);
  };

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
      // const fileName = `${Math.random()}.${newData.image}`.replaceAll("/", "");
      const fileName = `${Math.random()}-${newData.image.name}`.replaceAll(
        "/",
        ""
      );
      const imagePath = `${supabaseUrl}/storage/v1/object/public/vehicle-images/${fileName}`;

      // 1. Create new vehicle
      const { data, error } = await supabase
        .from("vehicles")
        .insert([{ ...newData, image: imagePath }]);

      // 2. Upload Image
      const { error: storageError } = await supabase.storage
        .from("vehicle-images")
        .upload(fileName, newData.image);

      // 3. If there is an error to upload image , then delete the data
      if (storageError) {
        // await supabase.from("vehicles").delete().eq("id", newData.id);
        console.log(storageError);
        throw new Error(
          toast.error("Error uploading image, cannot create new vehicle")
        );
      }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ ...createNewVehicle, image: fileValue });
    // const newData = { ...createNewVehicle, fileValue };
    // console.log(newData);
    // mutate({ ...formData, image: fileValue });
  };

  return (
    <Wrapper>
      <h1 className="section_title_global">Create New Vehicle</h1>
      <main className="section_global">
        <form onSubmit={handleSubmit}>
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

          <label>Image</label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleFileChange}
          />

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
