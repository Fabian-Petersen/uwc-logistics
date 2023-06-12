import styled from "styled-components";

const Wrapper = styled.main`
  form {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 35%;
    /* border: 1px solid blue; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--clr-bg-form);
    padding: 1rem 2rem;
    border-radius: 5px;
  }

  label {
    font-size: 1.8rem;
    color: var(--clr-primary);
    text-transform: capitalize;
  }

  input {
    height: 3.5rem;
    border: none;
    padding: 0.3rem 1.3rem;
    border-radius: 5px;
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  input:focus {
    outline: 1px solid var(--clr-input-focus);
  }

  h2 {
    color: var(--clr-primary);
    margin: 1.5rem auto;
    font-size: 3rem;
  }

  .flex-buttons {
    display: flex;
    gap: 2rem;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
    /* border: 1px solid red; */
  }

  .flex-buttons button {
    font-size: 1.5rem;
    width: 100%;
  }
`;
export default Wrapper;
