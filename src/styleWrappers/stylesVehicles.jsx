import styled from "styled-components";

const Wrapper = styled.main`
  .vehicles_container {
    /* border: 2px solid blue; */
    width: 60vw;
    height: 75vh;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  button {
    align-self: center;
    width: 100%;
  }

  .openModal {
    visibility: hidden;
  }
`;

export default Wrapper;
