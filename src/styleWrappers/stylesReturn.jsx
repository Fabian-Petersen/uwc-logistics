import styled from "styled-components";

const Wrapper = styled.main`
  .return_Container {
    /* border: 2px solid blue; */
    width: 60vw;
    height: 80vh;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  h1 {
    font-size: 5rem;
    /* border: 2px solid red; */
    margin: 0.5rem auto;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    background-color: var(--clr-bg-form);
    border-radius: 10px;
    padding: 2rem;
    color: var(--clr-primary);
  }

  label,
  input,
  select {
    width: 100%;
    /* padding: 1rem; */
  }

  .flex_column {
    display: flex;
    flex-direction: column;
    width: 50%;
    /* gap: 1rem; */
    /* border: 1px solid green; */
  }

  label {
    font-size: 2rem;
    height: 3.5rem;
    /* border: 1px solid yellow; */
  }

  input,
  option,
  select {
    /* border: 1px solid red; */
    font-size: 1.5rem;
    height: 5rem;
    border-radius: 5px;
    padding: 1rem;
  }

  .row {
    margin-bottom: 2rem;
  }
`;

export default Wrapper;
