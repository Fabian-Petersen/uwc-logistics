import Wrapper from "../styleWrappers/stylesDashboard";

import { useGlobalContext } from "../contextAPI";

const Dashboard = () => {
  const { token } = useGlobalContext();
  return (
    <Wrapper>
      <h1 className="section_title">Dashboard</h1>
      <main className="dashboard_container section">
        <h2>Welcome {token.user.user_metadata.name}</h2>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
