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
    padding: 0.5rem 2rem;
    gap: 2rem;
    /* border: 1px solid yellow; */
  }

  li img {
    width: 50px;
    height: 50px;
    margin-right: auto;
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
    padding: 0.75rem 2rem;
    border-radius: 15px;
    font-size: 1.5rem;
    transition: transform 0.2s ease-in;
    text-transform: uppercase;
    max-width: 10rem;
    flex: 1;
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
    color: white;
    background-color: var(--clr-bg-login);
    margin-right: 0;
  }

  .btn-signup {
    background-color: var(--clr-bg-signup);
    margin-right: 0;
    color: white;
  }

  .nav-button:hover {
    cursor: pointer;
    transform: translateY(-1.5px);
  }

  Navlink {
    text-decoration: none;
  }
`;

export default Wrapper;
