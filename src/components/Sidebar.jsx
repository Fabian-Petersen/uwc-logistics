import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../contextAPI";
import { NavLink } from "react-router-dom";
import {
  faHome,
  faClipboard,
  faCab,
  faAreaChart,
  // faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../styleWrappers/stylesSidebar";

const Sidebar = () => {
  const { openNav, setOpenNav } = useGlobalContext();

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

          <li>
            <NavLink to="/" className="link">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/booking">
              <span className="icon">
                <FontAwesomeIcon icon={faClipboard} />
              </span>
              Book Trip
            </NavLink>
          </li>

          <li>
            <NavLink to="/return">
              <span className="icon">
                <FontAwesomeIcon icon={faClipboard} />
              </span>
              Return
            </NavLink>
          </li>

          <li>
            <NavLink to="/vehicles">
              <span className="icon">
                <FontAwesomeIcon icon={faCab} />
              </span>
              Vehicles
            </NavLink>
          </li>

          <li>
            <NavLink to="/bookings">
              <span className="icon">
                <FontAwesomeIcon icon={faAreaChart} />
              </span>
              All Bookings
            </NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;
