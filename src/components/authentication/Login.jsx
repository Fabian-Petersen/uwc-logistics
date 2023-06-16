// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../styleWrappers/stylesLogin";
import { useGlobalContext } from "../../contextAPI";
import supabase from "../../config/supabaseClient";

const Login = () => {
  //$ 1. ====== use navigate hook to redirect the page to the dashboard once logged in. ====== //
  const navigate = useNavigate();

  //$ 2. ====== use context hook to to manage the state variables to be used in application ====== //
  const { setToken, userData, setUserData } = useGlobalContext();

  //$ 3. ====== handle the values entered by the user in the login form and store the data in the userData variable. ====== //
  const handleChange = (e) => {
    setUserData((prevUserDate) => {
      return {
        ...prevUserDate,
        [e.target.name]: e.target.value,
      };
    });
  };

  //$ 4. ====== handle the submission of the form and accessing the data from supabase. ====== //
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });
      setUserData(data);
      setToken(data);
      if (error) throw Error;
    } catch (error) {
      console.log(error);
    }
    navigate("/dashboard");
  };

  // console.log(token);
  //$ 5. ====== Render the login component  ====== //
  return (
    <Wrapper>
      <form className="login-container" onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
        <img className="image" src="" alt="" />
        <input
          name="email"
          className="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          className="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="btn-global">Submit</button>
      </form>
    </Wrapper>
  );
};

export default Login;
