// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
// import { navLinks } from "../../assets/data/navLinks";
import PropTypes from "prop-types";

const SidebarMenuSubLinks = ({ openSublinks, sublinks }) => {
  //   console.log(navLinks);
  //   const sublinks = navLinks.filter((link) => link?.sublinks);
  //   console.log(sublinks);
  return (
    <div>
      {sublinks && (
        <ul
          className={
            openSublinks ? "submenu_container_open" : "submenu_container_closed"
          }
        >
          {sublinks.map((item, index) => (
            <li className="submenu" key={index}>
              <NavLink className="submenu_link" to={sublinks.path}>
                {sublinks.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SidebarMenuSubLinks.propTypes = {
  openSublinks: PropTypes.string.isRequired,
  sublinks: PropTypes.string.isRequired,
};

export default SidebarMenuSubLinks;
