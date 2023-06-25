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
  }

  .container ul {
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
  }

  .infoContainer {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    /* border: var(--border-g); */
  }

  button {
    width: 20rem;
    position: absolute;
    /* border: var(--border-g); */
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition-2);
  }

  button:hover {
    cursor: pointer;
    transform: translate(-50%, -55%);
  }
`;
export default Wrapper;
