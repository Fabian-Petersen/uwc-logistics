import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;

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
    font-size: 2.5rem;
    background-color: lightgray;
    height: 5rem;
  }

  .tableRows {
    height: 3rem;
  }

  tbody tr:nth-of-type(2n) {
    background: red;
  }

  td {
    font-size: 1.5rem;
    padding: 1.5rem;
  }

  tbody:not(:last-child) {
    border-bottom: 0.5px lightgrey solid;
  }
`;

export default Wrapper;
