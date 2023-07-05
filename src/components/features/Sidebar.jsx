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
            const { name, path, icon, sublinks = [] } = link;
            return (
              <li key={index} className="menu_link_container open">
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
                      className="submenu_link_icon"
                      icon={faChevronRight}
                    />
                  )}
                </NavLink>
                {sublinks.length > 0 && (
                  <ul className="submenu_container sublinks_open">
                    {sublinks.map((item, subIndex) => (
                      <li className="submenu" key={subIndex}>
                        <NavLink className="submenu_link" to={item.path}>
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
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

{
  /* <nav>
<div className="title">
  <p>University of the Western Cape</p>
  <p>Department of Transport</p>
</div>
<ul className="sidebarContainer">
  {navLinks.map((link, index) => {
    const { name, path, icon, sublinks = [] } = link;
    return (
      <li key={index} className="open">
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
        </NavLink>
        <ul className="sublinks_container">
          {navLinks?.sublinks.map((item) => console.log(item))}

          <li>
            <NavLink className="sublink" to={sublinks.path}>
              <span className="icon">
                <FontAwesomeIcon icon={sublinks.icon} />
              </span>
              {sublinks.name}
            </NavLink>
          </li>
          {/* } */
}
//         </ul>
//       </li>
//     );
//   })}
// </ul>
// </nav> */}
