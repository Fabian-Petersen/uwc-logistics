import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* variables */
  --clr-primary: #0079ff;
  --clr-white: #fff;
  --clr-font-dark: #2b2a4c;
  --clr-font-darkgrey:#6d6d6d;
  --clr-font-lightgrey:#babcbc;
  --clr-bg: #0077c80d;
  --clr-link-active:#ffe569;

  /*  Text Variables */
  --font-welcomeText:clamp(1.5rem, 0.2rem,2rem);


/* Dashboard  */
--clr-bg-dash: ECF8F9; 

  /* forms */
  --clr-bg-form: #A0BFE0;

  /* tables */
  --clr-bg-tableRow-light:rgba(161, 194, 241, 0.3);
  --clr-table-header:rgba(10, 110, 189, 0.85);
  --clr-tag-cancel:#ff9b9b;

  /* navigation */
  --clr-bg-sideNav:#1c2534;


  /* authentication */
  --clr-bg-signup: rgb(177 58 58);
  --clr-bg-login: rgb(177 58 50);

 /* authentication */
  --clr-input-focus:yellow;
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

.title_subheading {
  font-size: 3rem;
  color:var(--clr-primary);
  text-transform:uppercase;
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
  top: 15%;
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

  
//  ========================================== Form Styles // ========================================== //


  .form_global{
    max-width:80rem;
    margin:0 auto;
    background-color: var(--clr-bg-form);
    padding:2rem;
    border-radius:10px;
  }

  .form_title{
  font-size: 3rem;
  color:var(--clr-primary);
  text-transform:uppercase;
  margin: 1.5rem auto;
  }

  input,select {
  border:none;
  font-size: 1.5rem;
  height: 4rem;
  border-radius: 5px;
  padding: 1rem;
  color:var(--clr-primary);
  }

  select {
    appearance: none;
  }

  /* Custom arrow */
  select {
    background-image: url("src/assets/images/down-arrow-wght400.svg");
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: calc(100% - 8px) center;
    color: var(--clr-font-darkgrey);
  }


input:focus{
  outline:var(--clr-yellow);
}

label {
  font-size: 2rem;
  height: 3rem;
  ${"" /* border: 1px solid yellow; */}
  }

  .form_button{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2rem 0;
    height:3.5rem;
  }

  img{
    display:block;
    width:100%;
  }


//  ========================================== Media Queries // ========================================== //


@media screen and (min-width: 990px) {
  .form_global{
  max-width:60%;
}
}
`;

export default GlobalStyles;
