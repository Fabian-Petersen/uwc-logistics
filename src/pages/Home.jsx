// import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Wrapper from "../styleWrappers/stylesHome";
import "bootstrap/dist/css/bootstrap.css";
import { useGlobalContext } from "../contextAPI";

const Home = () => {
  const { login } = useGlobalContext();
  return (
    <Wrapper>
      <div className="section home">
        {login ? "" : <h1>UWC TRANSPORT MANAGEMENT</h1>}
        <Navbar />
        {login ? <Login /> : ""}
      </div>
    </Wrapper>
  );
};

export default Home;
