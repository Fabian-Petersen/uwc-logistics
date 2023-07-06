import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/data/navLinks";
import Wrapper from "../../styleWrappers/stylesSidebarMenu";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SidebarMenuSubLinks from "./SidebarMenuSubLinks";
import { useState } from "react";

const SidebarMenu = () => {
  const [openSublinks, setOpenSubLinks] = useState(true);
  return (
    <Wrapper>
      <ul className="sidebarContainer">
        {navLinks.map((link, index) => {
          const { name, path, icon, sublinks = [] } = link;
          return (
            <li
              key={index}
              className="menu_link_container"
              onClick={() => setOpenSubLinks(!openSublinks)}
            >
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
                {sublinks.length > 0 && (
                  <FontAwesomeIcon
                    className={
                      openSublinks
                        ? "submenu_icon submenu_icon_closed"
                        : "submenu_icon submenu_icon_open"
                    }
                    icon={faChevronRight}
                  />
                )}
              </NavLink>
              <SidebarMenuSubLinks
                sublinks={sublinks}
                openSublinks={openSublinks}
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default SidebarMenu;
