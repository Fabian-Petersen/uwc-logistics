import Wrapper from "../../styleWrappers/stylesRegister";
import supabase from "../../config/supabaseClient";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import departments from "../../assets/data/departments";
import { useGlobalContext } from "../../contextAPI";

const RegisterTable = () => {
  const { registerUser, setRegisterUser } = useGlobalContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterUser((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
  };

  //  ============================ Register New User ========================== //

  const { mutate } = useMutation(
    async (newUser) => {
      // console.log(newUser);
      const { data, error } = await supabase.auth.signUp({
        email: newUser.email,
        password: newUser.password,
        options: {
          data: { ...newUser },
        },
      });

      if (error) {
        toast.error("Error Registering user, contact administrator");
        console.log(error.message);
      }

      return data;
    },
    {
      onSuccess: (data) => {
        if (data.user && data.session !== null) {
          toast.success("Registration Successfull, Please Login");
          navigate("/");
          setRegisterUser("");
          console.log(data);
        }
      },
      onError: (error) => {
        console.error("Mutation failed:", error);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(registerUser);
  };

  //   useQuery({ queryKey: ["newUser"], queryFn: registerUser });

  return (
    <Wrapper>
      <form className="form_global">
        <h2 className="form_title">Register</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          onChange={handleChange}
        />
        <select name="role" onChange={handleChange}>
          <option value="" defaultValue={""}>
            Select Role
          </option>
          <option>Staff</option>
          <option>Student</option>
          <option>Manager</option>
        </select>
        <select name="department" onChange={handleChange}>
          <option value="" defaultValue={""}>
            Select Department
          </option>
          {departments.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Staff / Student ID"
          name="id"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button
          className="btn-global form_button"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default RegisterTable;
