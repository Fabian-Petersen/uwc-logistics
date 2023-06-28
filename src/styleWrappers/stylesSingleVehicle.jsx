import styled from "styled-components";

const Wrapper = styled.main`
  .container {
    display: grid;
    height: 75vh;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    background-color: var(--clr-bg-form);
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: var(--radius-10);
    /* border: var(--border-r); */
  }

  ul {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding: 0;
  }

  li {
    color: var(--clr-font-dark);
    font-size: 2rem;
    text-transform: capitalize;
  }

  .vehicleDetails {
    display: flex;
    flex-direction: column;
    /* border: var(--border-r); */
    gap: 2rem;
  }

  .infoContainer {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    /* border: var(--border-g); */
  }

  button {
    width: 100%;
    transition: var(--transition-2);
  }

  button:hover {
    cursor: pointer;
  }
`;
export default Wrapper;
