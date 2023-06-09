import styled from "styled-components";

const Wrapper = styled.div`
  form {
    width: 95%;
    /* border: 1px solid red; */
  }

  ul {
    display: flex;
    background-color: var(--clr-bg-form);
    justify-content: center;
    padding: 1.5rem;
    /* border: 1px solid red; */
    margin: 0;
    align-items: center;
    transition: all 0.2s ease;
  }

  ul:hover {
    box-shadow: 5px 5px 15px var(--clr-font-dark);
    transform: translate(3px, -2px);
    border-radius: 5px;
  }

  img {
    width: 10rem;
    height: 10rem;
    margin-right: 1rem;
  }

  li {
    font-size: 2.5rem;
    color: var(--clr-font-dark);
    flex: 1;
    /* border: 1px red solid; */
  }

  #buttons {
    display: flex;
    gap: 1rem;
    /* border: 1px solid green; */
    flex: 1;
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
