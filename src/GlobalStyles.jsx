import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* variables */
  --clr-primary: #0079ff;
  --clr-bg-form: #f8f6f4;
  --clr-bg-sideNav:#1c2534;
  --clr-bg-signup: rgb(177 58 58);
  --clr-white: #fff;
  --clr-bg-login: rgb(177 58 50);
  --clr-font-dark: #2b2a4c;
  --clr-input-focus:yellow;
  --clr-bg: #0077c80d;
  --clr-font-lightgrey:#babcbc;
  --clr-font-darkgrey:#6d6d6d;
  --clr-btn-hover:#2f58cd;
  --clr-bg-main:#d8E1E6;
  --clr-bg-dashcard:#2d363b;
  --radius-5:5px;
  --radius-10:10px;


--border-b:1px solid blue;
--border-r:1px solid red;
--border-g:1px solid green;


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
  background-color: var(--clr-bg-main);
  /* border: solid 2px yellow; */
}

.title {
  font-size: 3.5rem;
  margin: 0 auto;
}

.btn-global {
  background-color: var(--clr-primary);
  padding:0.3rem 1.3rem;
  color: var(--clr-white);
  height:3.5rem;
  font-size: 1.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease;
  text-transform:uppercase;
}

.btn-global:hover {
  cursor: pointer;
  transform: var(--transform-2);
  background-color:var(--clr-btn-hover);
}

.section_global {
  position: absolute;
  top: 20%;
  left: 25%;
  width: 70vw;
  height: 80vh;
}

.section_title_global {
  position: absolute;
  top: 12%;
  left: 25%;
  color: var(--clr-primary);
  font-size: 3.5rem;
  margin: 0 auto;
  text-transform:uppercase;
}

.table_global{
  color:var(--clr-font-darkgrey);
  width: 100%;
  background-color: var(--clr-bg-form);
  border-radius: var(--radius-10);
  border-collapse: seperate;
  border-spacing: 0;
  overflow: hidden;
  text-transform:uppercase;
  display:table;
}


input,select {
  width: 100%;
  border:none;
  font-size: 1.5rem;
  height: 5rem;
  border-radius: 5px;
  padding: 1rem;
  color:var(--clr-font-darkgrey);
  }

input:focus{
  outline:var(--clr-yellow);
}

label {
  font-size: 2rem;
  height: 3.5rem;
  /* border: 1px solid yellow; */
  }

`;

export default GlobalStyles;
