import { Button } from "react-bootstrap";
import { useGlobalContext } from "../contextAPI";
import Wrapper from "../styleWrappers/stylesRegister";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const Register = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(registerUser);
  };

  const { mutate } = useMutation(
    async (registerUser) => {
      console.log(registerUser);
      const { data, error } = await supabase.auth.signUp({
        email: registerUser.email,
        password: registerUser.password,
      });

      if (error) {
        toast.error("Error Registering user, contact administrator");
        console.log(error.message);
        console.log(data);
      }

      return data;
    },
    {
      onSuccess: (data) => {
        if (data.user && data.session !== null) {
          toast.success("Registration Successfull, Please Login");
          navigate("/");
          setRegisterUser("");
        }
      },
      onError: (error) => {
        console.error("Mutation failed:", error);
      },
    }
  );

  return (
    <Wrapper>
      <h1 className="section_title_global">Register</h1>
      <main className="section_global">
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            required
          />
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </main>
    </Wrapper>
  );
};

export default Register;
