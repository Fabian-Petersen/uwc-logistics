import styled from "styled-components";

const Wrapper = styled.form`
  form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 80%;
    margin: 0 auto;
  }

  form label {
    color: var(--clr-primary);
    font-size: 1.8em;
    height: 1.8rem;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  #signup_additional_info,
  #signup input {
    gap: rem;
    margin-bottom: 1.5rem;
  }
`;

export default Wrapper;
