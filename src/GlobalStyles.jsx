import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* variables */
  --clr-primary: #0079ff;
  --clr-bg-form: #f8f6f4;
  --clr-bg-sideNav: #d8c4b6;
  --clr-bg-signup: rgb(177 58 58);
  --clr-white: #fff;
  --clr-bg-login: rgb(177 58 50);
  --clr-font-dark: #2b2a4c;


/* animation variables */
--transform-2: translateY(-2px);


}

html {
  font-size: 62.5%;
}

a,
ul {
  text-decoration: none;
  list-style-type: none;
  color: var(--clr-white);
}

*,
*::after,
*::before {
box-sizing:border-box;
margin: 0;
  padding: 0;
  transition:background-color 0.3s ease;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  min-height: 100vh;
  place-items: center;
  position: relative;
  font-family: "Poppins", sans-serif;
  /* border: solid 2px yellow; */
}

.title {
  font-size: 4rem;
  color: var(--clr-white);
  margin: 0 auto;
}

.btn-global {
  background-color: var(--clr-primary);
  ${"" /* padding: 1rem; */}
  color: var(--clr-white);
  height:3.5rem;
  font-size: 2rem;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: transform 0.2s ease;
}

.btn-global:hover {
  cursor: pointer;
  transform: var(--transform-2);
}

.section {
  position: absolute;
  top: 20%;
  left: 25%;
  width: 75vw;
  height: 100vh;
}

.section_title {
  position: absolute;
  top: 10%;
  left: 25%;
  color: var(--clr-primary);
  font-size: 5rem;
  margin: 0.5rem auto;
}

`;

export default GlobalStyles;
