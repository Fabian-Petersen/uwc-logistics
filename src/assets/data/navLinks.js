// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navIcons from "./icons";
const { faClipboard, faCab, faAreaChart, faPen, faReceipt } = navIcons;

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
    name: "Vehicles",
    path: "/vehicles",
    icon: faCab,
  },
  {
    name: "All Bookings",
    path: "/bookings",
    icon: faClipboard,
  },
];
