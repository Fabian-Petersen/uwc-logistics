import styled from "styled-components";

const Wrapper = styled.main`
  .booking_Container {
    border: 2px solid blue;
    width: 80vw;
    height: 100vh;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  h1 {
    font-size: 5rem;
    border: 2px solid red;
    margin: 3rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    /* background-color: rgba(25, 252, 250); */
    width: 60%;
    border: 1px solid red;
  }

  input {
    /* display: inline-block; */
    /* border: 1px solid red; */
    /* width: 50%; */
    /* height: 3rem; */
    /* margin-right: 1rem; */
  }

  label {
    /* border: 1px solid yellow; */
    font-size: 1.5rem;
    height: 3rem;
    /* padding: 1rem; */
    /* width: 50%; */
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid green;
    /* padding: 3rem; */
    /* height: 100%; */
    /* gap: 2rem; */
    /* width: 100%; */
  }

  btn-global {
  }
`;

export default Wrapper;
