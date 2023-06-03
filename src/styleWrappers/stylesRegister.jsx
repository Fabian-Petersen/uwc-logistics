import styled from "styled-components";

const Wrapper = styled.form`
  form {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 2rem;
    /* gap: 1.5rem; */
    width: 30rem;
    height: 40rem;
    justify-content: space-between;
  }

  input {
    height: 3rem;
    border-radius: 5px;
    outline: none;
    border: none;
    padding-left: 1rem;
  }

  button {
    height: 3.5rem;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default Wrapper;
