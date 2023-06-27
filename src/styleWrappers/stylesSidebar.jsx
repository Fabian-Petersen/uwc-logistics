import styled from "styled-components";

const Wrapper = styled.ul`
  .navOpen {
    transform: translateX(0);
  }

  .navClosed:not(.bars) {
    transform: translateX(-75%);
    border: none;
    background-color: transparent;
    visibility: hidden;
  }

  nav.navClosed > ul.sidebarContainer > li:hover {
    cursor: default;
  }

  nav {
    /* color: black; */
    list-style-type: none;
    position: absolute;
    flex-direction: column;
    display: flex;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 28rem;
    gap: 2rem;
    transition: all 0.35s ease-in;
    background-color: var(--clr-bg-sideNav);
  }

  .title {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--clr-white);
    font-size: 1.3rem;
    gap: 1rem;
    padding: 0 1.5rem;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 0.5px solid white;
  }

  .title:first-child {
    padding-top: 2rem;
    font-size: 1.5rem;
  }

  hr {
    position: aboslute;
    top: 10%;
  }

  .title hr {
    background-color: var(--clr-white);
  }

  /* .bars {
  border: 1px solid teal
    position: absolute;
    font-size: 3rem;
    right: 2rem;
    top: 1rem;
    color: var(--clr-font-lightgrey);
  }

  .bars:hover {
    scale: 1.1;
    cursor: pointer;
  } */

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 2.5rem;
    justify-content: flex-start;
    margin-top: 5rem;
    align-content: center;
    width: 100%;
    padding: 0;
    transition: all 0.35s ease-in;
    /* border: 2px solid blue; */
  }

  ul > li {
    transition: transform 0.5s ease;
    padding: 1.3rem;
    color: var(--clr-white);
    text-transform: uppercase;
    border-left: 5px solid transparent;
  }

  ul > li:hover {
    background-color: var(--clr-primary);
    cursor: pointer;
    border-left: 5px solid var(--clr-bg-login);
  }

  .link {
    color: var(--clr-white);
    font-size: 1.8rem;
  }

  .icon {
    margin-right: 1.2rem;
    font-size: 1.8rem;
  }

  .sublink_icon {
    margin-left: 1rem;
  }

  .sublinks {
    color: white;
  }

  /* .sublinks:hover {
    visibility: visible;
  } */
`;
export default Wrapper;
