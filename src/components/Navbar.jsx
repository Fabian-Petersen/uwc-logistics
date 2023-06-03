import Wrapper from "../styleWrappers/stylesNavbar";
import { useGlobalContext } from "../contextAPI";
import { useNavigate, NavLink } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Navbar = () => {
  const { setAuth, auth, login, setLogin, userData } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    setLogin(true);
  };

  //? function to handle logging out of the session
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setAuth(false);
      setLogin(!login);
      navigate("/");
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    setLogin(true);
  };

  return (
    <Wrapper>
      <ul className="navbar">
        {/* <li className="logo">
          <img
            src="../public/images/University-of-the-Western-Cape-logo.jpg"
            alt="uwc-logo"
          />
        </li> */}
        {login ? (
          ""
        ) : (
          <li onClick={handleLogin} className="login">
            Login
          </li>
        )}
        {auth ? (
          <li onClick={handleLogout} className="login">
            Logout
          </li>
        ) : (
          ""
        )}
        {auth ? (
          ""
        ) : (
          <NavLink to="/register">
            <li onClick={handleSignUp} className="signup">
              sign up
            </li>
          </NavLink>
        )}
      </ul>
    </Wrapper>
  );
};

export default Navbar;
