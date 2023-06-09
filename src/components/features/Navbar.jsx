import Wrapper from "../../styleWrappers/stylesNavbar";
import { useGlobalContext } from "../../contextAPI";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setUserData, setToken, login, setLogin, token } = useGlobalContext();
  const navigate = useNavigate();
  const handleLogin = () => {
    setToken(true);
    setLogin(true);
  };

  //? function to handle logging out of the session
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      setUserData("");
      setLogin(!login);
      navigate("/");
      setToken(false);
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    navigate("/register");
    setLogin(true);
  };

  //Define the current location the user is at to style elements accordingly.
  const location = window.location.pathname;
  return (
    <Wrapper>
      <ul className={location === "/" ? "navbar-home" : "navbar"}>
        {token ? (
          <ul className="navButtons">
            <li className={location === "/" ? "bars-home" : "bars"}>
              <FontAwesomeIcon icon={faBars} />
            </li>
            <li className="welcomeText">
              Hello, <span>{token?.user?.user_metadata?.name}</span>
            </li>
            <Link to="/user">
              <li className="userIcon">
                <FontAwesomeIcon icon={faUser} />
              </li>
            </Link>
            <li
              onClick={handleLogout}
              className="btn-global nav-button btn-login"
            >
              Logout
            </li>
          </ul>
        ) : (
          <ul className="navButtons">
            <li onClick={handleLogin} className="nav-button btn-login">
              Login
            </li>
            <li onClick={handleSignUp} className="nav-button btn-signup">
              sign up
            </li>
          </ul>
        )}
      </ul>
    </Wrapper>
  );
};
export default Navbar;
