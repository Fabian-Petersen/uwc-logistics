import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;

  table {
    width: 100%;
    background-color: var(--clr-bg-form);
    border-radius: 10px;
    padding: 2rem;
    color: var(--clr-primary);
    /* border-top-left-radius: 10px; */
    border-collapse: seperate;
    border-spacing: 0;
    overflow: hidden;
  }

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
    /* border: 1px solid green; */
  }

  tbody:not(:last-child) {
    border-bottom: 0.5px lightgrey solid;
  }

  .buttons {
    position: absolute;
    display: flex;
    gap: 1rem;
    top: 50%;
    transform: translateY(-50%);
    /* border: 1px solid red; */
  }

  button {
    outline: none;
    border: none;
    flex: 1;
    font-size: 1.5rem;
    border-radius: 3px;
    background-color: var(--clr-primary);
    color: var(--clr-white);
    padding: 0.3rem 1.3rem;
    /* border: 1px solid red; */
    text-transform: capitalize;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default Wrapper;
