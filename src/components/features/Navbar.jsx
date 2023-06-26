import Wrapper from "../../styleWrappers/stylesNavbar";
import { useGlobalContext } from "../../contextAPI";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClient";

const Navbar = () => {
  const { setToken, login, setLogin, token } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    setLogin(true);
  };

  //? function to handle logging out of the session
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setToken(false);
      setLogin(!login);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    navigate("/register");
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
        {token ? (
          <ul className="navButtons">
            <li className="welcome-title">
              <h3>
                <span>Welcome, </span>
                {/* {token.user.user_metadata.name} */}
              </h3>
            </li>
            <li onClick={handleLogout} className="nav-button btn-login">
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
