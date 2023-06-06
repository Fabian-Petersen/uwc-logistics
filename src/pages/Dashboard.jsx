import Wrapper from "../styleWrappers/stylesDashboard";

import { useGlobalContext } from "../contextAPI";

const Dashboard = () => {
  const { token } = useGlobalContext();
  return (
    <Wrapper>
      <div>
        <h1>Dashboard</h1>
        <h2>Welcome {token.user.user_metadata.name}</h2>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
