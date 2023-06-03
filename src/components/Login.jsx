// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../styleWrappers/stylesLogin";
import { useGlobalContext } from "../contextAPI";
import supabase from "../config/supabaseClient";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth, userData, setUserData } = useGlobalContext();
  // console.log("email:", registerUser.email, "password:", registerUser.password);

  const handleChange = (e) => {
    setUserData((prevUserDate) => {
      return {
        ...prevUserDate,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });
      console.log(data);
      if (error) throw Error;
    } catch (error) {
      console.log(error);
    }
    setAuth(true);
    navigate("/dashboard");
  };

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
        <button className="button">Login</button>
      </form>
    </Wrapper>
  );
};

export default Login;
