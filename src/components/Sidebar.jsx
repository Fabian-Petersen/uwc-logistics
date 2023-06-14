import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../contextAPI";
import { NavLink } from "react-router-dom";
import { navLinks } from "../assets/data/navLinks";
import icons from "../assets/data/icons";
import Wrapper from "../styleWrappers/stylesSidebar";

const Sidebar = () => {
  const { openNav, setOpenNav } = useGlobalContext();
  const { faBars, faXmark } = icons;

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  return (
    <Wrapper>
      <nav className={openNav ? "navOpen" : "navClosed"}>
        {openNav ? (
          <div onClick={handleClick} className="bars">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        ) : (
          <div onClick={handleClick} className="bars">
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
        <ul className="sidebarContainer">
          <li className="title">
            {/* <span className="title-icon">
              <FontAwesomeIcon icon={faUser} />
            </span> */}
            UWC Logistics
          </li>
          <hr />
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

          {/* <li>
            <NavLink to="/dashboard" className="link">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/booking" className="link">
              <span className="icon">
                <FontAwesomeIcon icon={faClipboard} />
              </span>
              Book Trip
            </NavLink>
          </li>

          <li>
            <NavLink to="/return" className="link">
              <span className="icon">
                <FontAwesomeIcon icon={faClipboard} />
              </span>
              Return
            </NavLink>
          </li>

          <li>
            <NavLink to="/vehicles" className="link">
              <span className="icon">
                <FontAwesomeIcon icon={faCab} />
              </span>
              Vehicles
            </NavLink>
          </li>

          <li>
            <NavLink to="/bookings" className="link">
              <span className="icon">
                <FontAwesomeIcon icon={faAreaChart} />
              </span>
              All Bookings
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;
