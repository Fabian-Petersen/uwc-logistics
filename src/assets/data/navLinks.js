// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navIcons from "./icons";
const { faClipboard, faCab, faAreaChart, faPen, faReceipt, faWrench, faUsers } =
  navIcons;

export const navLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: faAreaChart,
  },
  {
    name: "Book Trip",
    path: "/createbooking",
    icon: faPen,
  },
  {
    name: "Return",
    path: "/return",
    icon: faReceipt,
  },
  {
    name: "Maintenance",
    path: "/maintenance",
    icon: faWrench,
    sublinks: [
      {
        name: "Record Maintenance",
        path: "/maintenance/register",
        icon: faPen,
      },
      { name: "View Maintenance", path: "/maintenance", icon: faWrench },
    ],
  },
  {
    name: "Vehicles",
    path: "/vehicles",
    icon: faCab,
  },
  {
    name: "Users",
    path: "/users",
    icon: faUsers,
  },
  {
    name: "My Bookings",
    path: "/bookings",
    icon: faClipboard,
  },
];
