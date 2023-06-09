import styled from "styled-components";

const Wrapper = styled.ul`
  .navOpen {
    transform: translateX(0);
  }

  .navClosed {
    transform: translateX(-75%);
    border: none;
    background-color: var(--clr-white);
  }

  nav.navClosed > ul.sidebarContainer > li:hover {
    cursor: default;
    /* background-color: darkgray; */
  }

  nav {
    list-style-type: none;
    position: absolute;
    /* border-right: 2.5px solid red; */
    display: flex;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 25rem;
    flex-direction: column;
    gap: 2.5rem;
    transition: all 0.35s ease-in;
    background-color: var(--clr-bg-sideNav);
    color: var(--clr-font-dark);
  }

  hr {
    width: 80%;
    margin: 0 auto;
  }

  .bars {
    /* border: 1px solid teal */
    position: absolute;
    font-size: 3rem;
    right: 2rem;
    top: 1rem;
    color: var(--clr-bg-login);
  }

  .bars:hover {
    scale: 1.1;
    cursor: pointer;
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 2rem;
    justify-content: flex-start;
    margin-top: 5rem;
    align-content: center;
    width: 100%;
    padding: 0;
    /* border: 2px solid blue; */
  }

  .title {
    font-size: 2rem;
    padding: 0 1rem;
  }

  .title-icon {
    font-size: 2rem;
    margin-right: 1rem;
  }

  .sidebarContainer > li:not(.title) {
    transition: transform 0.5s ease;
    padding: 1.3rem;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .sidebarContainer > li:hover:not(.title) {
    cursor: pointer;
    transform: translateX(1rem);
  }

  .icon {
    margin-right: 1.2rem;
    font-size: 1.5rem;
  }
`;
export default Wrapper;
