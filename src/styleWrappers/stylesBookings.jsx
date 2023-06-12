import styled from "styled-components";

const Wrapper = styled.main`
  .trips_container {
    /* border: 2px solid blue; */
    width: 60vw;
    height: 80vh;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  ul {
    display: flex;
    background-color: var(--clr-bg-form);
    justify-content: center;
    padding: 1.5rem;
    /* border: 1px solid red; */
    margin: 0;
    align-items: center;
    transition: all 0.2s ease;
  }

  li {
    font-size: 2rem;
    color: var(--clr-font-dark);
    flex: 1;
    /* border: 1px red solid; */
  }
`;
export default Wrapper;
