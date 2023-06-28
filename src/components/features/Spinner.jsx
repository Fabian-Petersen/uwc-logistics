import styled from "styled-components";

const Spinner = () => {
  return (
    <Wrapper>
      <main>
        <div className="center">
          <div className="ring"></div>
          <span>loading...</span>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .center {
    position: absolute;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 25%;
    transform: translateY(-25%);
    z-index: 1000;
  }

  .ring {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    animation: ring 2s linear infinite;
  }

  .ring::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }

  span {
    font-size: 20px;
    color: var(--clr-primary);
    text-transform: capitalize;
    line-height: 200px;
    animation: text 3s ease-in-out infinite;
  }

  @keyframes ring {
    0% {
      transform: rotate(0deg);
      box-shadow: 1px 5px 2px var(--clr-primary);
    }

    50% {
      transform: rotate(180deg);
      box-shadow: 1px 5px 2px #18b201;
    }

    100% {
      transform: rotate(360deg);
      box-shadow: 1px 5px 2px #0456c8;
    }
  }

  @keyframes text {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export default Spinner;
