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
    background-color: var(--clr-table-header);
    height: 5rem;
  }

  .tableRows {
    height: 3rem;
  }

  .table_global .sc-dtBdUo:nth-of-type(2n) {
    background: var(--clr-bg-tableRow-light);
  }

  td {
    font-size: 1.5rem;
    padding: 1.5rem;
  }

  /* .rdt_TableBody:last-child {
    border-bottom: none;
  } */

  .kreUpT,
  .kDMEDp > * {
    background-color: transparent;
    color: var(--clr-font-dark);
    /* fill: var(--clr-font-dark); */
  }

  .rdt_Pagination {
    background-color: transparent;
    border: none;
    color: var(--clr-font-dark);
  }

  .sc-kdBSHD .eIbmKX {
    fill: blue;
  }
`;

export default Wrapper;
