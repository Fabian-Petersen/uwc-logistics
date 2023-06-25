import styled from "styled-components";

const Wrapper = styled.main`
  .dashboard {
    background-color: var(--clr-bg-form);
    border-radius: 10px;
    height: 95%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .card-container {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    gap: 2rem;
  }

  .card {
    position: relative;
    background-color: var(--clr-bg-sideNav);
    width: 35rem;
    height: 10rem;
    padding: 2rem;
    color: var(--clr-white);
    outline: none;
    border: none;
    border-radius: var(--radius-5);
    /* border: 1px solid blueviolet; */
  }

  .card h3 {
    position: absolute;
    font-size: 1.8rem;
    /* left: 5%; */
    top: 5%;
  }

  .card p {
    position: absolute;
    font-size: 5rem;
    top: 50%;
    /* border: 1px solid blue; */
    padding: 0;
    margin: 0;
    transform: translateY(-35%);
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    font-size: 2.5rem;
  }

  .graph-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    background-color: var(--clr-bg-form);
  }

  .barChart,
  .pieChart {
    outline: 1px solid blue;
    /* border-radius: var(--radius); */
  }

  .small-charts {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`;
export default Wrapper;
