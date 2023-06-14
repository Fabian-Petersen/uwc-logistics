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

  select {
    appearance: none;
  }

  /* Custom arrow */
  select {
    background-image: url("src/assets/images/down-arrow-wght400.svg");
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: calc(100% - 8px) center;
    color: var(--clr-font-darkgrey);
  }

  option {
    padding: 2rem;
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

  .flex_column {
    display: flex;
    flex-direction: column;
    width: 50%;
    /* gap: 1rem; */
    /* border: 1px solid green; */
  }

  .row {
    margin-bottom: 2rem;
  }
`;

export default Wrapper;
