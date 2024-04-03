import {
  faHouseUser,
  faFile,
  faBriefcase,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export const categories = [
  {
    label: "Home",
    href: "/",
    icon: faHouseUser,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: faFile,
  },
  {
    label: "Work",
    href: "/work",
    icon: faBriefcase,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: faAddressBook,
  },
];
