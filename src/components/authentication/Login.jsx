// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../styleWrappers/stylesLogin";
import { useGlobalContext } from "../../contextAPI";
import supabase from "../../config/supabaseClient";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  //$ 1. ====== use navigate hook to redirect the page to the dashboard once logged in. ====== //
  const navigate = useNavigate();
  //$ 2. ====== use context hook to to manage the state variables to be used in application ====== //
  const { setUserData, userData, setToken } = useGlobalContext();

  //$ 3. ====== handle the values entered by the user in the login form and store the data in the userData variable. ====== //
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
    mutate(userData);
  };

  const { mutate } = useMutation(
    async (userData) => {
      console.log(userData);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });

      if (error) {
        toast.error(`${error.message}`);
        navigate("/");
        console.log(error);
        return;
      }

      return data;
    },
    {
      onSuccess: (data) => {
        if (data.user && data.session !== null) {
          toast.success(`Welcome ${data?.user?.user_metadata?.name}`);
          setToken(data);
          sessionStorage.setItem("token", JSON.stringify(data));
          navigate("/dashboard");
        }
      },
    }
  );

  //$  ====== Render the login component  ====== //
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
        <button type="submit" className="btn-global">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Login;
