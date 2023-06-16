import styled from "styled-components";

const Wrapper = styled.main`
  thead > tr td {
    font-size: 2rem;
    font-weight: 700;
  }

  th,
  tr {
    padding: 0 1rem;
  }

  thead > tr {
    border-top-right-radius: 15px;
    background-color: lightgray;
    height: 5rem;
    /* border: 1px solid red; */
  }

  thead > tr:last-child {
    width: 3rem;
  }

  .tableRows {
    height: 3rem;
    position: relative;
  }

  tbody tr:nth-of-type(2n) {
    background: lightskyblue;
    width: 100%;
  }

  td {
    font-size: 1.5rem;
    padding: 1.5rem;
  }

  tbody:not(:last-child) {
    border-bottom: 0.5px lightgrey solid;
  }

  .buttons-container {
    position: absolute;
    display: flex;
    gap: 1rem;
    top: 50%;
    transform: translateY(-50%);
    /* border: 1px solid red; */
  }

  .btn-vehicle-fns {
    outline: none;
    border: none;
    flex: 1;
    font-size: 1.5rem;
    border-radius: 3px;
    background-color: transparent;
    color: var(--clr-primary);
    padding: 0.3rem 1.3rem;
    text-transform: capitalize;
  }

  .btn-vehicle-fns:hover {
    cursor: pointer;
    background-color: transparent;
    color: var(--clr-btn-hover);
  }

  .btn-vehicleTable {
    border: 1px solid blue;
    margin: 1.5rem 0;
    width: 100%;
  }
`;

export default Wrapper;
