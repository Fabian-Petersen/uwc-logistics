import Wrapper from "../styleWrappers/stylesRegister";
import RegisterTable from "../components/register/RegisterForm";

const Register = () => {
  return (
    <Wrapper>
      <main className="section_global">
        <RegisterTable />
      </main>
    </Wrapper>
  );
};

export default Register;
