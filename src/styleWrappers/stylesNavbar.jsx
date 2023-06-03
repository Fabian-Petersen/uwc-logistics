import styled from "styled-components";

const Wrapper = styled.ul`
  .navbar {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 7rem;
    width: 100%;
    /* background-color: var(--clr-bg-nav); */
    text-decoration: none;
    list-style-type: none;
    padding: 0.5rem 0;
    gap: 2rem;
  }

  .logo {
    width: 10rem;
    height: 10rem;
  }

  .signup,
  .login {
    color: white;
    background-color: var(--clr-bg-signup);
    padding: 0.75rem 2rem;
    margin-right: 3rem;
    border-radius: 15px;
    font-size: 1.5rem;
    transition: transform 0.2s ease-in;
    text-transform: uppercase;
    max-width: 10rem;
    flex: 1;
  }

  .login {
    background-color: var(--clr-login);
    margin-right: 0;
  }

  .signup:hover,
  .login:hover {
    cursor: pointer;
    transform: translateY(-1.5px);
  }

  Navlink {
    text-decoration: none;
  }
`;

export default Wrapper;
