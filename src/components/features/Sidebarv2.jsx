import Wrapper from "../../styleWrappers/stylesSidebar";
import SidebarMenu from "./SidebarMenu";

const Sidebarv2 = () => {
  // const { openNav, setOpenNav } = useGlobalContext();
  // const { faChevronRight } = icons;

  // const handleClick = () => {
  //   setOpenNav(!openNav);
  // };

  return (
    <Wrapper>
      <nav>
        <div className="title">
          <p>University of the Western Cape</p>
          <p>Department of Transport</p>
        </div>
        <SidebarMenu />
      </nav>
    </Wrapper>
  );
};
export default Sidebarv2;
