// import Login from "../components/Login";
import Navbar from "../components/features/Navbar";
import Login from "../components/authentication/Login";
import Wrapper from "../styleWrappers/stylesHome";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  return (
    <Wrapper>
      <div className="section home">
        <h1>UWC TRANSPORT MANAGEMENT</h1>
        <Navbar />
        <Login />
      </div>
    </Wrapper>
  );
};

export default Home;
