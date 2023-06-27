import styled from "styled-components";

const Wrapper = styled.main`
  form {
    display: grid;
    grid-template-columns: max(15rem) auto;
    /* flex-direction: column; */
    margin: 0 auto;
    padding: 2rem;
    border-radius: var(--radius-5);
    gap: 2rem;
    border: var(--border-r);
    background-color: darkgrey;
  }

  label {
    height: 3rem;
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

  input[type="file"] {
    height: 5rem;
    /* border: var(--border-r); */
  }

  input:focus {
    outline: 1px solid var(--clr-input-focus);
  }

  select {
    height: 3rem;
    padding: 0.5rem;
    font-size: 1.3rem;
  }

  .btn_main_register_submit {
    font-size: 1.2rem;
    width: 100%;
    margin: 0 auto;
  }
`;
export default Wrapper;
