import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useGlobalContext } from "../contextAPI";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/data/navLinks";
import Wrapper from "../../styleWrappers/stylesSidebar";

const Sidebar = () => {
  // const { openNav, setOpenNav } = useGlobalContext();
  // const { faBars, faXmark } = icons;

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
        <ul className="sidebarContainer">
          {navLinks.map((link, index) => {
            const { name, path, icon } = link;
            return (
              <li key={index}>
                <NavLink to={path} className="link">
                  <span className="icon">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;
