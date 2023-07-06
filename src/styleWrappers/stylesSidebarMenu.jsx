import styled from "styled-components";

const Wrapper = styled.ul`
  ul {
    position: absolute;
    left: 0;
    top: 15%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 2.5rem;
    justify-content: flex-start;
    align-content: center;
    width: 100%;
    padding: 0;
    transition: all 0.35s ease-in;
    /* border: 2px solid white; */
  }

  ul > li {
    position: relative;
    transition: transform 0.5s ease;
    padding: 1.3rem;
    color: var(--clr-white);
    text-transform: uppercase;
    border-left: 5px solid transparent;
    /* border: 1px solid teal; */
  }

  ul > li:hover {
    background-color: var(--clr-primary);
    cursor: pointer;
    border-right: 5px solid var(--clr-link-active);
    outline: none;
  }

  .link {
    color: var(--clr-white);
    font-size: 1.8rem;
  }

  .icon {
    margin-right: 2.5rem;
    font-size: 1.8rem;
  }

  .menu_link_container {
    position: relative;
    /* border: 1px solid red; */
  }

  .submenu_container_open {
    position: absolute;
    top: 35%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
    border: none;
    border: 1px solid red;
    margin-left: 5rem;
    margin-top: 2rem;
    font-size: 1.3rem;
    border: none;
    padding: 0;
    opacity: 1;
  }

  .submenu_container_closed {
    opacity: 0;
  }

  .submenu_container li {
    margin: 0;
    padding: 1rem 0;
    padding-left: 2rem;
  }

  .submenu_icon {
    margin-left: 2rem;
    transition: all 0.2s ease;
  }

  .submenu_icon_closed {
    transform: rotate(90deg);
  }
  .submenu_icon_open {
    transform: rotate(-0deg);
  }

  .submenu_links_open {
    visibility: visible;
  }

  .submenu_links_closed {
    visibility: hidden;
    opacity: 0;
  }

  .submenu_link {
    padding: 0;
    line-height: 0;
  }

  submenu:hover {
    border: none;
    background-color: none;
  }

  .active:not(.submenu_link) {
    color: var(--clr-link-active);
    font-size: 1.8rem;
  }
`;

export default Wrapper;
