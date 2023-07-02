import styled from "styled-components";

const Wrapper = styled.div`
  .login-container {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 30rem;
    height: 45rem;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 10px;
    padding: 2rem;
    gap: 2rem;
  }

  .image {
    background-image: url("src/assets/images/jurica-koletic.jpg");
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: 0rem auto;
    background-size: cover;
    border: 3px solid var(--clr-white);
  }

  .title {
    font-size: 5rem;
    color: white;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .email,
  .password,
  .button {
    height: 4rem;
    border: none;
    border-radius: 3px;
    outline: none;
    font-size: 1.5rem;
    /* padding-left: 0.8rem; */
    padding: 1rem;
  }

  .email:focus,
  .password:focus {
    outline: 2px solid yellow;
  }

  .email::placeholder,
  .password::placeholder {
    padding: 0.5rem;
  }

  .email {
    color: grey;
  }

  .password {
    color: grey;
  }

  button {
    height: 4rem;
  }

  btn-global:hover {
    transform: var(--transform-y-2);
  }

  link:hover {
    cursor: pointer;
    background-color: rgba(0, 128, 0, 0.9);
    transform: translateY(-1.5px);
  }
`;

export default Wrapper;
