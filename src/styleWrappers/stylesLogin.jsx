import styled from "styled-components";

const Wrapper = styled.div`
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 35rem;
    height: 45rem;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 10px;
    padding: 2rem;
    gap: 1.5rem;
  }

  .image {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-color: #fff;
    margin: 1rem auto;
  }

  .title {
    font-size: 4rem;
    color: white;
    margin: 0 auto;
  }

  /* :is(.username, .password, .button) {
    height: 3.5rem;
    border: none;
    border-radius: 3px;
    outline: none;
  } */

  .email,
  .password,
  .button {
    height: 3.5rem;
    border: none;
    border-radius: 3px;
    outline: none;
  }

  /* :is(.username, .password):focus {
    outline: 3px solid yellow;
    padding: 0.3rem;
  } */

  .email:focus,
  .password:focus {
    outline: 3px solid yellow;
    padding: 0.3rem;
  }

  /* :is(.username, .password)::placeholder {
    padding: 0.5rem;
  } */

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

  .button {
    background-color: green;
    color: white;
    margin-bottom: 1rem;
    font-size: 2rem;
    height: 4rem;
    outline: none;
    width: 100%;
  }

  link:hover {
    cursor: pointer;
    background-color: rgba(0, 128, 0, 0.9);
    transform: translateY(-1.5px);
  }
`;

export default Wrapper;
