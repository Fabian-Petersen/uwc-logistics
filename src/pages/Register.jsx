import { Button } from "react-bootstrap";
import { useGlobalContext } from "../contextAPI";
import Wrapper from "../styleWrappers/stylesRegister";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

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
    const { name, surname, email, password, confirmPassword } = registerUser;
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
            surname: surname,
            confirmPassword: confirmPassword,
          },
        },
      });
      console.log(data);
      console.log(error);
      alert("check your email for verification");
    } catch (error) {
      alert(error);
    }
    navigate("/");
  };

  return (
    <Wrapper>
      <h1 className="section_title_global">Register</h1>
      <main className="section_global">
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            required
            onChange={handleChange}
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
