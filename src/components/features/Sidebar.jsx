import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useGlobalContext } from "../contextAPI";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/data/navLinks";
import Wrapper from "../../styleWrappers/stylesSidebar";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icons from "../../assets/data/icons";

const Sidebar = () => {
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
        <ul className="sidebarContainer">
          {navLinks.map((link, index) => {
            const { name, path, icon } = link;
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={
                    window.location.pathname === path ? "active" : "link"
                  }
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  {name}
                  <span className="sublink_icon">
                    {name === "Maintenance" ? (
                      <FontAwesomeIcon icon={faChevronRight} />
                    ) : (
                      ""
                    )}
                  </span>
                </NavLink>
                {name === "maintenance" ? (
                  <ul className="submenu">
                    <li>Enter Maintenance</li>
                    <li>Maintenace List</li>
                    <li>Insurance Claims</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;
