import { useGlobalContext } from "../../contextAPI";
import Wrapper from "../../styleWrappers/stylesCreateVehicleModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../config/supabaseClient";
import { toast } from "react-hot-toast";
import { supabaseUrl } from "../../config/supabaseClient";

// ================================================== Add A New Vehicle ================================================ //

const CreateVehicleModalMulti = () => {
  const {
    setOpenVehicleModal,
    setCreateNewVehicle,
    createNewVehicle,
    setFileValues,
    fileValues,
  } = useGlobalContext();

  const handleFileChange = (e) => {
    setFileValues(Array.from(e.target.files));
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
      const imageNames = newData.images.map((file) =>
        `${Math.random()}.${file.name}`.replaceAll("/", "")
      );
      // console.log(imageNames);

      const imagePaths = imageNames.map(
        (name) =>
          `${supabaseUrl}/storage/v1/object/public/vehicle-images/${name}`
      );
      // console.log(imagePaths);

      // 1. Create new vehicle
      const { data, error } = await supabase
        .from("vehicles")
        .insert([{ ...newData, images: imagePaths }]);

      if (error) {
        console.log(error);
      }

      // 2. Upload Images
      const files = newData.images;
      const images = [];
      for (const file of files) {
        const { data, error: storageError } = await supabase.storage
          .from("vehicle-images")
          .upload(file.name, file);
        console.log(file.name);

        if (storageError) {
          throw new Error("Error uploading image");
        }

        images.push(data.Key);

        return images;

        // export async function uploadImages(files) {
        //   const images = [];

        //   for (const file of files) {
        //     const { data, error } = await supabase.storage.from('bucket-name').upload(file.name, file);

        //     if (error) {
        //       throw new Error('Error uploading image');
        //     }

        //     images.push(data.Key);
        //   }

        //   return images;
        // }
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
    mutate({ ...createNewVehicle, images: fileValues });
    // const data = { ...createNewVehicle, images: fileValues };
    // console.log(data);
    // console.log(fileValues);

    // Reset The Form
    setCreateNewVehicle("");
  };

  return (
    <Wrapper>
      <h1 className="section_title_global">Create New Vehicle</h1>
      <main className="section_global">
        <form onSubmit={handleSubmit}>
          <label>Vehicle Brand</label>
          <input type="text" name="name" onChange={handleChange} />

          <label>vehicle model</label>
          <input type="text" name="model" onChange={handleChange} />

          <label>year</label>
          <input type="text" name="year" onChange={handleChange} />

          <label>registration</label>
          <input type="text" name="registration" onChange={handleChange} />

          <label>Start Kilometers</label>
          <input name="start_km" onChange={handleChange} />

          <label>Image</label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            multiple
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

export default CreateVehicleModalMulti;
