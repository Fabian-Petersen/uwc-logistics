import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    color: white;
    font-size: 7rem;
    width: 80%;
    /* border: 1px solid white; */
    animation: title-animation 2s ease-in 0.3s forwards;
    opacity: 0;
  }
  .section {
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .home {
    background-image: url("src/assets/images/University_of_the_Western_Cape_-_Central_Campus_entry.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    background-blend-mode: multiply;
    top: 0;
    left: 0;
  }

  @keyframes title-animation {
    0% {
      opacity: 0;
      transform: translateY(0rem);
    }

    50% {
      opacity: 0.5;
      /* transform: translateY(5rem); */
    }

    100% {
      opacity: 1;
      transform: translateY(8rem);
    }
  }
`;

export default Wrapper;
