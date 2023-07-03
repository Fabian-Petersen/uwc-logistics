import styled from "styled-components";

const Wrapper = styled.ul`
  .navbar {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    position: fixed;
    top: 0;
    left: 28rem;
    height: 7rem;
    width: calc(100vw - 28rem);
    background-color: var(--clr-bg-form);
    padding: 0.5rem 2rem;
    gap: 2rem;
    border-bottom: 0.5px solid var(--clr-font-lightgrey);
    box-shadow: 0.3px 0 5px 1px rgba(0, 0, 0, 0.2);
  }

  .navbar-home {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 7rem;
    width: 100vw;
    /* background-color: var(--clr-bg-form); */
    background-color: rgba(25, 25, 25, 0.75);
    padding: 0.5rem 2rem;
    gap: 2rem;
    border-bottom: 0.5px solid var(--clr-font-lightgrey);
    box-shadow: 0.3px 0 5px 1px rgba(0, 0, 0, 0.2);
  }

  .bars-home {
    margin-right: auto;
    font-size: 3rem;
    color: var(--clr-white);
  }

  .bars {
    margin-right: auto;
    font-size: 3rem;
    color: var(--clr-font-darkgrey);
  }

  .bars:hover {
    scale: 1.1;
    cursor: pointer;
  }

  li img {
    width: 50px;
    height: 50px;
    margin-right: auto;
  }

  h3,
  span {
    color: var(--clr-font-dark);
  }

  img:hover {
    cursor: pointer;
  }

  .navButtons {
    display: flex;
    gap: 2.5rem;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    /* border: 1px solid red; */
  }

  .nav-button {
    padding: 0.5rem;
    border-radius: 15px;
    font-size: 1.5rem;
    transition: var(--transition-2);
    text-transform: uppercase;
    max-width: 10rem;
    flex: 1;
    text-align: center;
  }

  .userIcon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    /* background-color: lightgray; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1.8rem;
    color: var(--clr-primary);
  }

  .welcomeText {
    text-transform: capitalize;
    color: var(--clr-white);
    font-size: var(--font-welcomeText);
  }

  .welcomeText span {
    color: var(--clr-primary);
    font-size: calc(var(--font-welcomeText) + 0.2rem);
  }

  .userIcon::before {
    content: "";
    background-color: lightgray;
    position: absolute;
    border-radius: 50%;
    width: 3rem;
    aspect-ratio: 1/1;
    z-index: -1;
  }

  .userIcon:hover {
    scale: 1.05;
    cursor: pointer;
  }

  .welcome-title {
    margin: auto 2rem;
  }

  .welcome-title h3 {
    font-size: 1.7rem;
  }

  .welcome-title span {
    font-size: 1.5rem;
  }

  .btn-login {
    color: var(--clr-white);
    background-color: var(--clr-bg-login);
    margin-right: 0;
  }

  .btn-login:hover {
    color: var(--clr-white);
    background-color: var(--clr-bg-login);
  }

  .btn-signup {
    background-color: var(--clr-bg-signup);
    margin-right: 0;
    color: white;
  }

  .nav-button:hover {
    cursor: pointer;
    /* transform: translateY(-1.2px); */
  }

  Navlink {
    text-decoration: none;
    color: var(--clr-font-lightgrey);
  }
`;

export default Wrapper;
