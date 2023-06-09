import styled, { css } from "styled-components";

const Row = styled.div`
  ul {
    display: flex;
    font-size: 1.5rem;
    background-color: var(--clr-bg-form);
    justify-content: space-between;
    padding: 2rem;
    /* border: 1px solid red; */
    margin: 0;
    /* width: 100%; */
  }

  ul li {
    flex: 1;
    /* border: 1px solid red; */
  }

  ${(props) =>
    props.type === "horizontal" &&
    css`
      width: 80%;
      /* border: 1px solid green; */
    `}
`;

export default Row;
