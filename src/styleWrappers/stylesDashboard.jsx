import styled from "styled-components";

const Wrapper = styled.main`
  .dashboard {
    background-color: var(--clr-bg-form);
    /* border-radius: var(--radius); */
    border-radius: 10px;
    height: 100%;
    /* border: 1px solid red; */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .card-container {
    display: flex;
    width: 100%;
    /* border: 1px solid blue; */
    justify-content: space-evenly;
    gap: 2rem;
  }

  .card {
    position: relative;
    background-color: var(--clr-font-lightgrey);
    width: 35rem;
    height: 10rem;
    padding: 2rem;
    color: var(--clr-white);
    outline: none;
    border: none;
    /* border-radius: 10px; */
    border-radius: var(--radius);
  }

  .card h3 {
    position: absolute;
    font-size: 1.8rem;
    /* left: 5%; */
    top: 5%;
  }

  .card p {
    position: absolute;
    font-size: 6.5rem;
    top: 50%;
    /* border: 1px solid blue; */
    padding: 0;
    margin: 0;
    transform: translateY(-35%);
  }
  .icon {
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 3.5rem;
  }

  .graph-container {
    /* border: 1px solid red; */
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .lineGraph,
  .pieChart {
    border: 1px solid blue;
    border-radius: var(--radius);
  }
`;
export default Wrapper;
