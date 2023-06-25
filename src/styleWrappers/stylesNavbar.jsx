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
    background-color: var(--clr-bg-form);
    padding: 0.5rem 2rem;
    gap: 2rem;
    border-bottom: 0.5px solid var(--clr-font-lightgrey);
    box-shadow: 0.3px 0 5px 1px rgba(0, 0, 0, 0.2);
    /* border: 1px solid yellow; */
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
    gap: 1.5rem;
    flex: 1;
    justify-content: flex-end;
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
    color: var(--clr-bg-login);
    background-color: none;
    border: 1.5px solid var(--clr-bg-login);
    margin-right: 0;
  }

  .btn-login:hover {
    color: var(--clr-white);
    background-color: var(--clr-bg-login);
    /* border: none; */
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
