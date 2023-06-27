// import Spinner from "../components/features/Spinner";
import ConfirmDelete from "../components/features/ConfirmDelete";
import { toast } from "react-hot-toast";

const Test = () => {
  const handleClick = () => {
    <ConfirmDelete />;
    toast.success("you clicked me");
  };

  return (
    <div>
      <button className="btn-global" onClick={handleClick}>
        Click Me
      </button>
      <ConfirmDelete />
    </div>
  );
};

export default Test;
