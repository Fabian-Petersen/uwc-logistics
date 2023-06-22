import styled from "styled-components";

const Wrapper = styled.main`
  form {
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 0 auto;
    background-color: var(--clr-bg-form);
    padding: 0rem 2rem;
    border-radius: var(--radius-5);
    gap: 1rem;
  }

  label {
    height: 2rem;
    font-size: 1.5rem;
    color: var(--clr-primary);
    text-transform: capitalize;
    margin: 0;
    padding: 0.5rem;
  }

  input {
    border: none;
    height: 3rem;
    border-radius: var(--radius-5);
    font-size: 1.5rem;
  }

  form :nth-child(12) {
    /* border: var(--border-r); */
    padding-bottom: 3rem;
  }

  input:focus {
    outline: 1px solid var(--clr-input-focus);
  }

  .flex-buttons {
    display: flex;
    gap: 2rem;
    width: 70%;
    margin: 2rem auto;
  }

  .flex-buttons button {
    font-size: 1.2rem;
    width: 100%;
  }
`;
export default Wrapper;
