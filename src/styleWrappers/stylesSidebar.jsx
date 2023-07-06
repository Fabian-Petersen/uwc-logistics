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
    position: fixed;
    flex-direction: column;
    display: flex;
    top: 0;
    left: 0;
    height: 100%;
    width: 28rem;
    gap: 2rem;
    transition: all 0.35s ease-in;
    background-color: var(--clr-bg-sideNav);
    /* border: 1px solid red; */
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
`;
export default Wrapper;
