import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;
  /* border: var(--border-r); */

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
    background-color: var(--clr-table-header);
    color: var(--clr-white);
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
    background: var(--clr-bg-tableRow-light);
    width: 100%;
  }

  tbody:last-child {
    margin-bottom: 2rem;
    /* border: var(--border-g); */
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

  .btn-container {
    padding-top: 2rem;
    /* border: 1px solid blue; */
    margin: 1rem;
  }

  .btn-container td {
    height: 2rem;
    margin: 0;
    padding: 2rem 1rem;
  }

  .btn-container td button {
    width: 100%;
  }

  .rdt_Pagination {
    background-color: transparent;
    border: none;
    color: var(--clr-font-dark);
  }

  .rdt_TableRow input[type="checkbox"]:checked {
    fill: rgba(10, 110, 189, 0.85);
  }

  .rdt_TableHeader {
    color: transparent;
    background-color: transparent;
  }

  .icHRoc {
    background-color: transparent;
    color: var(--clr-bg-login);
  }

  .showBtuton {
    opacity: 1;
  }

  .hideButton {
    opacity: 0;
  }

  #actionButton {
    position: absolute;
    top: 1%;
    left: 92%;
    font-size: 1rem;
    background-color: var(--clr-primary);
    z-index: 1000;
  }

  #actionButton:hover {
    cursor: pointer;
    transform: var(--transform-2);
    background-color: var(--clr-bg-login);
  }
`;

export default Wrapper;
