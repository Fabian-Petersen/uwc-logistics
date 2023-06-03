import Wrapper from "../styleWrappers/stylesDashboard";

import { useGlobalContext } from "../contextAPI";

const Dashboard = () => {
  const { userData } = useGlobalContext();
  console.log(userData);
  return (
    <Wrapper>
      <div>
        <h1>Welcome {userData.user.user_metadata.name}</h1>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
