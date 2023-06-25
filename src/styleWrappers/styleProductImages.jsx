import styled from "styled-components";

const Wrapper = styled.main`
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }

  .mini-gallery {
    display: flex;
    height: 10rem;
    justify-content: space-evenly;
    gap: 0.5rem;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-5);
    object-fit: cover;
  }

  .active {
    overflow: hidden;
    border: 2.5px solid var(--clr-primary);
  }

  .mini-gallery:hover {
    cursor: pointer;
  }
`;
export default Wrapper;
